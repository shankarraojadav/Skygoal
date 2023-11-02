import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: String
    },

    token: {
        type: String
    }
});


userSchema.pre("save", async function (next) {
    if(this.isModified("password")) {
        const hadhedPassword = await bcrypt.hash(this.password, 10);
        this.password = hadhedPassword;
    };
    next();
})


const UserDetails = mongoose.model("userdetail", userSchema);

export default UserDetails;