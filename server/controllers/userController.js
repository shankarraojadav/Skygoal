import UserDetails from "../models/UserModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

//Signup

export const SignUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if(!(name && email && password)) {
      return res.status(400).json("All fields are neccessary!");
    };
    
    const oldUserDetails = await UserDetails.findOne({ email });

    if (oldUserDetails) {
      return res.status(400).json("This email is already in use!");
    }

    const newUser = new UserDetails({ name, email, password });
    await newUser.save();

    const { _id } = newUser;

    const token = jwt.sign({ _id }, process.env.Secret_Key);

    newUser.token = token;

    await newUser.save();

    return res.status(200).json(newUser);
  } catch (error) {
    return res.status(400).json("error while creating user", error);
  }
};

//login

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserDetails.findOne({ email });

    if (!user) {
      return res.status(400).json("User not found!");
    }

    const matchPassword = bcrypt.compare(password, user.password);

    if (!matchPassword) {
      return res.status(404).json({ error: "Email/password not matching!" });
    }

    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).send("error while login", error);
  }
};

//verifyToken

export const verifyToken = async (req, res) => {
  try {
    const user = req.user;

    res.status(200).json({ user });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Token verification failed" });
  }
};
