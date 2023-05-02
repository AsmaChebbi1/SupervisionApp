const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserModel = new Schema({
    matricule: {
        type:"string",
        unique:true,
},

    password: {
        type:"string",
        unique:true,
},
    role:"string",

})
module.exports = mongoose.model("users", UserModel)