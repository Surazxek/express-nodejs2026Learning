import express from 'express'
import {  forgetPassword, login, logout, register, resetPassword} from '../controllers/authController.js';
import auth from '../middlewares/auth.js';




const router = express.Router()

router.post("/login", login)

router.post("/register", register)

router.post("/forgot-password", forgetPassword)


router.post("/reset-password/:userId", resetPassword)

router.post("/logout", logout)



export default router;