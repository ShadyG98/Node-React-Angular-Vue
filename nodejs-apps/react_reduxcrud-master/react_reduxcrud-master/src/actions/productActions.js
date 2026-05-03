import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR,
    START_PRODUCTS_DOWNLOAD,
    DOWNLOAD_PRODUCTS_SUCCESS,
    DOWNLOAD_PRODUCTS_ERROR,
    GET_PRODUCT_DELETE,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_ERROR,
    GET_PRODUCT_EDIT,
    START_EDIT_PRODUCT,
    EDIT_PRODUCT_SUCCESS,
    EDIT_PRODUCT_ERROR
} from '../types';
import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';

export function createNewProductAction(product) {
    return async (dispatch) => {
        dispatch(addProduct());

        try {
            await clienteAxios.post('/productos', product);
            dispatch(addProductSuccess(product));

            Swal.fire(
                'Correct',
                'The product was added successfully',
                'success'
            );
        } catch (error) {
            console.log(error);
            dispatch(addProductError(true));

            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'There was an error, please try again'
            });
        }
    };
}

const addProduct = () => ({
    type: ADD_PRODUCT,
    payload: true
});

const addProductSuccess = (product) => ({
    type: ADD_PRODUCT_SUCCESS,
    payload: product
});

const addProductError = (state) => ({
    type: ADD_PRODUCT_ERROR,
    payload: state
});

export function fetchProductsAction() {
    return async (dispatch) => {
        dispatch(downloadProducts());

        try {
            const response = await clienteAxios.get('/productos');
            dispatch(downloadProductsSuccess(response.data));
        } catch (error) {
            console.log(error);
            dispatch(downloadProductsError());
        }
    };
}

const downloadProducts = () => ({
    type: START_PRODUCTS_DOWNLOAD,
    payload: true
});

const downloadProductsSuccess = (products) => ({
    type: DOWNLOAD_PRODUCTS_SUCCESS,
    payload: products
});

const downloadProductsError = () => ({
    type: DOWNLOAD_PRODUCTS_ERROR,
    payload: true
});

export function deleteProductAction(id) {
    return async (dispatch) => {
        dispatch(getProductDelete(id));

        try {
            await clienteAxios.delete(`/productos/${id}`);
            dispatch(deleteProductSuccess());

            Swal.fire(
                'Deleted',
                'The product was deleted successfully',
                'success'
            );
        } catch (error) {
            console.log(error);
            dispatch(deleteProductError());
        }
    };
}

const getProductDelete = (id) => ({
    type: GET_PRODUCT_DELETE,
    payload: id
});

const deleteProductSuccess = () => ({
    type: DELETE_PRODUCT_SUCCESS
});

const deleteProductError = () => ({
    type: DELETE_PRODUCT_ERROR,
    payload: true
});

export function editProductAction(product) {
    return (dispatch) => {
        dispatch(getProductEditAction(product));
    };
}

const getProductEditAction = (product) => ({
    type: GET_PRODUCT_EDIT,
    payload: product
});

export function updateProductAction(product) {
    return async (dispatch) => {
        dispatch(startEditProduct());

        try {
            await clienteAxios.put(`/productos/${product.id}`, product);
            dispatch(editProductSuccess(product));
        } catch (error) {
            console.log(error);
            dispatch(editProductError());
        }
    };
}

const startEditProduct = () => ({
    type: START_EDIT_PRODUCT
});

const editProductSuccess = (product) => ({
    type: EDIT_PRODUCT_SUCCESS,
    payload: product
});

const editProductError = () => ({
    type: EDIT_PRODUCT_ERROR,
    payload: true
});