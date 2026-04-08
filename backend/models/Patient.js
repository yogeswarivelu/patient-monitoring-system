const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    age:{
        type:Number,
        required:true
    },

    gender:String,

    disease:String,

    status:{
        type:String,
        default:"Admitted"
    }

});

module.exports = mongoose.model("Patient",patientSchema);