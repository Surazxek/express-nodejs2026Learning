import express from 'express';
import { createProduct, deleteProduct, getAllProducts, getProductByID, updateProduct } from '../controllers/productController.js';
import auth from '../middlewares/auth.js';

const app = express();

const router = express.Router();
// URL : /api/products

router.get("/", getAllProducts)

router.get ("/:id", getProductByID)   // getProductbyid

router.post("/", auth, createProduct)


router.put("/:id", auth, updateProduct );

router.delete("/:id", deleteProduct );


export default router;