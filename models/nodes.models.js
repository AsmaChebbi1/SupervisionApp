const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const NodeModel = new Schema({
    lieu: {
        type:"string",
        
},
    puissancereçue: {
        type:"number",
        
},

    teb: {
        type:"number",
        },
        lat: {
            type:"number",
            
    },lng: {
        type:"number",
        
}
    })
module.exports = mongoose.model("node", NodeModel)