import productService from "../services/productService.js"


export const getAllProducts = async (req, res) =>{
    const products = await productService.getAllProducts();
    res.json(products)
}

export const getProductByID = async (req, res) =>{
   try {
     const id = req.params.id

    const product =  await productService.getProductById(id);
    if(!product) return res.status(404).send ("Product not found")
    res.json(product)
   } catch (error) {
    res.status(500).send(error.message);
    
   }
}
export const createProduct = async (req, res) => {
  try {
    const data = await productService.createProduct({
      ...req.body,
      createdBy: req.user.id
    });

    res.status(201).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


export const updateProduct = async (req, res) =>{
  const id = req.params.id;
  try {
    const data = await productService.updateProduct(id, req.body)
    res.send(data)
    // console.log("BODY:", req.body);

  } catch (error) {
    res.status(500).send(error.message)
  }
}



export const deleteProduct = async (req, res) =>{
    const id = req.params.id
    try {
        await productService.deleteProduct(id)
        res.send(`Product deleted successfully of id: ${id}`)
    } catch (error) {
        res.status(500).send(error.message);
    }
}





