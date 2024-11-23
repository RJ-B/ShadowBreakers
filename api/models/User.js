<<<<<<< HEAD
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        firstName:{type: String, required: true},
        lastName:{type: String, required: true},
        username: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
    );

=======
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        firstName:{type: String, required: true},
        lastName:{type: String, required: true},
        username: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
    );

>>>>>>> a2ab1112518d39227690f560726fa6511a2eee7d
module.exports = mongoose.model("User", UserSchema);