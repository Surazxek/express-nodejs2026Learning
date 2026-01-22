import express from 'express';
import { createProduct, deleteProduct, getAllCategories, getAllProducts, getProductByID, getProductsByUser, updateProduct } from '../controllers/productController.js';
import auth from '../middlewares/auth.js';
import roleBasedAuth from '../middlewares/roleBasedAuth.js';
import { ROLE_ADMIN, ROLE_MERCHANT } from '../constants/roles.js';

const app = express();

const router = express.Router();
// URL : /api/products

router.get("/categories", getAllCategories);

router.get("/", getAllProducts)

router.get("/users", auth, getProductsByUser)

router.get ("/:id", getProductByID)   // getProductbyid



router.post("/", auth, roleBasedAuth(ROLE_MERCHANT),createProduct)


router.put("/:id", auth, roleBasedAuth(ROLE_MERCHANT), updateProduct );

router.delete("/:id", auth, roleBasedAuth(ROLE_ADMIN), deleteProduct );


export default router;