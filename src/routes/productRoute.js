import express from 'express';
import { createProduct, deleteProduct, getAllProducts, getProductByID, updateProduct } from '../controllers/productController.js';
const app = express();

const router = express.Router();
// URL : /api/products

router.get("/", getAllProducts)

router.get ("/:id", getProductByID)   // getProductbyid

router.post("/", createProduct)


router.put("/:id", updateProduct );

router.delete("/:id", deleteProduct );


export default router;