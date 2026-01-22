// Database related

import Product from "../models/Product.model.js"


//. Sorting: {fieldName:ORDER } for e.g {price: -1} 1: ASC | -1: DESC

// 2. Limit: Max no of items to display    pagination



const getAllProducts = async (query, userId) => {
  console.log(query)

  const sort = JSON.parse(query.sort || "{}");
  const limit = query.limit
  const offset = query.offset

  const filters = {}
  const { category, brands, name, min, max} = query
  
  if (userId) {
    filters.createdBy = userId;
  }

  if(category) filters.category = category // absolute filter

  if(brands) {
    const brandItems = brands.split(",")    // array ma 
     filters.brand = {$in: brandItems,}
  }
  if(name) {filters.name = {$regex:name, $options: "i",}}   //fuzzy searching
   
  if(min) filters.price = {$gte: parseFloat(min)}

   if(max) filters.price = { ...filters.price,  $lte: parseFloat(max)}
  
   

   const products = await Product.find(filters
   ).sort(sort).limit(limit).skip(offset)
   return products;
}


const getProductById = async (id) => {
 const product = await Product.findById(id)
 return product
}

const getAllCategories = async () => {
  const categories = await Product.distinct("category");
  return categories;
};


const createProduct = async (data, userId) => {
  return await Product.create({
    ...data,
    createdBy: userId
  });
};


const updateProduct = async (id,data) =>{
    return await Product.findByIdAndUpdate(id, data, { new: true }
)
}

const deleteProduct = async (id) => {
    await Product.findByIdAndDelete(id);
}

export default {getAllProducts,getProductById, createProduct,updateProduct, deleteProduct, getAllCategories}