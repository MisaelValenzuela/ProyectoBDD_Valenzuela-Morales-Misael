const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    año:{
        type: Number,
        required:true
    },
    pais:{
        type: String,
        required:true
    },
    ganador:{
        type: String,
        required:true
    },
    segundo:{
        type: String,
        required:true
    },
    tercero:{
        type: String,
        required:true
    },
    cuarto:{
        type: String,
        required:true
    },
    golesAnotados:{
        type: Number,
        required:true
    },
    equiposCalificados:{
        type: Number,
        required:true
    },
    partidosJugados:{
        type: Number,
        required:true
    },
    continenteCampeon:{
        type: String,
        required: true
    }
})
module.exports = mongoose.model('Campeones', userSchema);