const mongoose = require('mongoose')

const AdminSchema = new mongoose.Schema({
    Name:{
        type : String,
        required : true
    },
    Password:{
        type : String,
        required : true,
        unique:true
    },
    Phone:{
        type : Number,
        required : true
    },
    Role:{
        type : String,
        required : true
    },
    Email:{
        type:String,
        required:true
        
    },
    
})


const Admin = mongoose.model('Admin', AdminSchema);
module.exports = Admin;