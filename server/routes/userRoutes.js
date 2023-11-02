import express from "express";
import { SignUp, Login, verifyToken } from "../controllers/userController.js";
import { Auth } from "../middleWares/auth.js";


const router = express.Router();

router.post("/signup", SignUp);
router.post("/login", Login);
router.get("/verify", Auth,  verifyToken);



export default router;