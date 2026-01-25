import { ROLE_ADMIN } from "../constants/roles.js";
import productService from "../services/productService.js";

export const getAllProducts = async (req, res) => {
  const products = await productService.getAllProducts(req.query);
  
  res.json(products);
};



export const getProductsByUser = async (req,res) =>{
    const products = await productService.getAllProducts(req.query, req.user.id);
    res.json(products)
}

export const getProductByID = async (req, res) => {
  try {
    const id = req.params.id;

    const product = await productService.getProductById(id);
    if (!product) return res.status(404).send("Product not found");
    res.json(product);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
export const createProduct = async (req, res) => {
  const userId = req.user.id;
  const files = req.files
  const input = req.body // boddy bata sab inpust janxa tei bhara postman body
  try {
    const data = await productService.createProduct(input, files, userId);
   
   res.json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getAllCategories = async (req, res) => {
  try {
    const categories = await productService.getAllCategories();
    res.json(categories);
  } catch (error) {
    res.status(500).send(error.message);
  }
};


export const updateProduct = async (req, res) => {
  const id = req.params.id;
  const user= req.user;
  try {
    const product = await productService.getProductById(id);

    if (!product) return res.status(404).send("Product not found");

    if (product.createdBy != user.id && !user.roles.includes(ROLE_ADMIN)) {
      return res.status(403).send("Access Denied");

    }

    const data = await productService.updateProduct(id, req.body);
    res.send(data);
    // console.log("BODY:", req.body);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    await productService.deleteProduct(id);
    res.send(`Product deleted successfully of id: ${id}`);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
