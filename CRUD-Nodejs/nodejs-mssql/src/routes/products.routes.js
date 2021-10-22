import {Router} from 'express'
import {createNewProduct, getProducts, getProductByid, deleteProductByid, getTotalProducts, updateProductByid} from '../controllers/products.controller'

const router= Router()

router.get('/products', getProducts);

router.post('/products', createNewProduct);

router.get('/products/count', getTotalProducts);

router.get('/products/:id', getProductByid);

router.delete('/products/:id', deleteProductByid);

router.put('/products/:id', updateProductByid);

export default router