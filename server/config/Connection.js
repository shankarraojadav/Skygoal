import mongoose from "mongoose";


const Connection = async () => {
    try {
        const url = process.env.Mongo_Url;
        await mongoose.connect(url);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("error while connecting to db", error);
    }
};



export default Connection;