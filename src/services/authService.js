import User from "../models/Users.model.js";
import ResetPassword from "../models/ResetPassword.model.js"
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

const forgetPassword = async (email) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw {
      statusCode: 404,
      message: "User with this email does not exist",
    };
  }

  const otp = Math.floor(100000 + Math.random() * 900000).toString(); // 6 digit string

  await ResetPassword.create({
    userId: user._id,
    token: otp,
  });

  return { message: "Reset password OTP sent to your email" };
};

const resetPassword = async (userId, token, password) => {

  const data = await ResetPassword.findOne({
    userId,
    expiresAt: { $gte: Date.now() }
  });

  if (!data || data.token !== token) {
    throw {
      statusCode: 400,
      message: "Invalid token."
    };
  }

  if (data.isUsed) {
    throw {
      statusCode: 400,
      message: "Token already used."
    };
  }

  const hashedPassword = bcrypt.hashSync(password, 10);

  await User.findByIdAndUpdate(userId, {
    password: hashedPassword,
  });

  await ResetPassword.findByIdAndUpdate(data._id, {
    isUsed: true
  });

  return { message: "Password reset successfully" };
};




export default { login, register, forgetPassword, resetPassword}
