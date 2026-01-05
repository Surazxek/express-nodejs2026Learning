import User from "../models/Users.model.js";
import bcrypt from "bcryptjs";

const login = async (data) => {
  const user = await User.findOne({
    $or: [{email: data.email},
    {phone: data.phone,}]
  });

  if (!user){
    throw {
      statusCode: 404,
      message: "User not Found"
    }
  };

  const isPasswordMatch = bcrypt.compareSync(data.password, user.password)   // data bata auune ra hashed password compare garxa

   if(!isPasswordMatch){
    throw{
        statusCode: 400,
        message: "Incorrect Email or Password "
    }
   }
  return user;
};


const register = async (data) => {
   const user = await User.findOne({
    $or: [{email: data.email},
    {phone: data.phone,}]
   }) 
    if (user){ throw {
        statusCode: 409,
        message: "User already exist"
    };
}

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(data.password, salt)

 return await User.create({
    address: data.address,
    name: data.name,
    phone: data.phone,
    email: data.email,
    password: hashedPassword,
    roles: data.roles,
  });
};


export default { login,register };
