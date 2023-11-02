import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import Connection from "./config/Connection.js";
import userRouter from "./routes/userRoutes.js";

const port = process.env.PORT || 3000;

dotenv.config();

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


app.use("/", userRouter);

app.listen(port, () => {
    console.log("server started", port)
});


Connection();