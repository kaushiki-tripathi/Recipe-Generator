const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  googleId: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password:{
    type: String,
  },
  f_name:{
    type: String,
    required: true,
    default:""
  },

});

const userModel=mongoose.model('user',userSchema)
module.exports=userModel;