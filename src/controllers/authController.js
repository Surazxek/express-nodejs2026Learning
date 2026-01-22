import authService from "../services/authService.js";
import {  PASSWORD_REGEX } from "../constants/regex.js";
import { formatUserData } from "../helpers/dataFormatter.js";
import {createJWT} from "../utils/jwt.js";

const login = async (req, res) => {
  try {

    const{email, phone, password} = req.body

    if(!email && !phone) return res.status(422).send("Email or Phone is required.");
    if(!password) return res.status(422).send("Password is required")   
 
    const data = await authService.login(req.body);

    const formattedData = formatUserData(data)

    const token = createJWT(formattedData)

    res.cookie("authToken", token) // first parameter and actual token linxa

    res.json(formatUserData(data));
  } catch (error) {
    res.status(error.statusCode || 500).send(error.message);
  }
};

const register = async (req, res) => {
  try {
    const { address, email, name, phone, password, confirmPassword } = req.body || {};

    if (!address?.city)
      return res.status(422).send("Address/City is required.");

    if (!email)
      return res.status(422).send("Email is required.");

    if (!name)
      return res.status(422).send("Name is required.");

    if (!phone)
      return res.status(422).send("Phone number is required.");

    if (!password)
      return res.status(422).send("Password is required.");

    if (!confirmPassword)
      return res.status(422).send("Confirm password is required.");

   

    // THEN: check match
    if (password !== confirmPassword)
      return res.status(422).send("Password doesn't match");

     //  FIRST: check password strength
    if (!PASSWORD_REGEX.test(password))
      return res
        .status(422)
        .send(
          "Password must contain upperCase & lowerCase, number and special character"
        );

    const data = await authService.register(req.body);
    const formattedData = formatUserData(data)

    const token = createJWT(formattedData)

    res.cookie("authToken", token) // first parameter and actual token linxa
    
    res.json(formattedData);

  } catch (error) {
    res.status(error.statusCode || 500).send(error.message);
  }
};


const logout = (req,res) => {
  res.clearCookie("authToken");

  res.json({message: " Logout successful"})
}



const forgetPassword = async (req, res) => {
  try {
    const email = req.body.email;

    if (!email) return res.status(422).send("Email is required");

    const data = await authService.forgetPassword(email);
    res.json(data);

  } catch (error) {
    res.status(error.statusCode || 500).send(error.message || "Something went wrong");
  }
};



const resetPassword = async (req, res) => {
  try {
    const password = req.body.password
    const confirmPassword = req.body.confirmPassword;
    const token = req.query.token;
    const userId = req.params.userId
    
    if (!password) return res.status(422).send("Password is required");
    if (!confirmPassword) return res.status(422).send("ConformPassword is required");

    if(password != confirmPassword){
      return res.status(422).send("Password do not match")
    }
    try {
        const data = await authService.resetPassword(userId, token, password)

        res.json(data)
    } catch (error) {
         res.status(error.statusCode || 500).send (error.message)
    }

    res.json(data);

  } catch (error) {
    res.status(error.statusCode || 500).send(error.message);
  }
};





export { login, register,logout, forgetPassword, resetPassword}
