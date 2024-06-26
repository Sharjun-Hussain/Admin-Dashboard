const mongoose = require('mongoose');

const organizationSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Address:{
        type:String,
        required:true
    },
    Phone:{
        type:Number,
        
    },
    Email:{
        type:String,
        
    },
    Website:{
        type:String,
        
    },
    UserID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Admin",
        required: true,
      },
})

const Organization = mongoose.model('Organization', organizationSchema);

module.exports = Organization;