const User = require('../models/user');
const bcryptjs=require('bcryptjs');

exports.register = async (req, res) => {
  console.log("This api is being called")
  res.status(200).json({ message: "Register endpoint working!", data: req.body });
}
exports.register = async (req, res) => {
  try{
    let {f_name,email,password}=req.body;
    let isUserExist=await User.findOne({email});
    if(isUserExist){
      res.status(400).json({error:"User already exists"});
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
    const newUser=new User({
      f_name,
      email,
      password
    });
    //await newUser.save();

    res.status(201).json({message:"User registered successfully", success:"yes", data:newUser});
  }
  catch(err){
    console.error(err);
    res.status(500).json({ error:"Server error",message: err.message });
  }

}