

const logger = (req, res, next) => {
    const method = req.method
    console.log(`Method: ${method} & URL: ${req.originalUrl}`);
    if(req.method ==='PATCH') 
      return  res.status(405).send("Patch method not allowed")
    next(); //  must call next()
};  // this was made for global scope

export default logger;
