
import { ROLE_MERCHANT, ROLE_USER } from "../constants/roles.js";
import User from "../models/Users.model.js"
import bcrypt from "bcryptjs";
import { Readable} from 'stream';
import uploadFile from "../utils/file.js";

const createUser = async (data)=>{
    return await User.create(data)



}

const createMerchant = async (data)=>{

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
    

    return await User.create({ address: data.address,
    name: data.name,
    phone: data.phone,
    email: data.email,
    password: hashedPassword,
    roles:[ROLE_USER, ROLE_MERCHANT],});
}


const updateUser = async (id, data) => {
   const updateData = {
     address: data.address,
      name: data.name,
      phone: data.phone,
   }
 
  if (data.password) updateData.password = bcrypt.hashSync(data.password);

  return await User.findByIdAndUpdate(
    id, updateData,
   
    { new: true }
  );
};

const deleteUser = async (id) =>{
  await User.findByIdAndDelete(id);
}



const getAllUsers = async () => {
   const users = await User.find()
   return users;
}

const getAllCustomers = async () => {
   const users = await User.find({
    roles:[ROLE_USER],
   }
    
   )
   return users;
}

const getUserById = async (id) => {
  const user = await User.findById(id);
  return user;
};

const uploadProfileImage = async (userId, file) => {
  const uploadedFile = await uploadFile(file);

  const data =  await User.findByIdAndUpdate(
    userId,
    {
      profileImageUrl: uploadedFile.url,
    },
    { new: true }
  );

  return data
};


export default {createUser, createMerchant, updateUser, deleteUser, getAllUsers, getUserById, getAllCustomers, uploadProfileImage}