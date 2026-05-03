import { Router } from 'express';
import {
    createProduct,
    getProducts,
    getProductById,
    deleteProductById,
    getProductCount,
    updateProductById
} from '../controllers/products.controller';

const router = Router();

router.get('/products', getProducts);
router.post('/products', createProduct);
router.get('/products/count', getProductCount);
router.get('/products/:id', getProductById);
router.delete('/products/:id', deleteProductById);
router.put('/products/:id', updateProductById);

export default router;