import User from "../models/Users.model.js"

const createUser = async (data)=>{
    return await User.create(data)

}


export default {createUser}