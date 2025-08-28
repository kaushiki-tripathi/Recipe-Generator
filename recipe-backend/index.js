const express=require('express');
const app=express();
const cookieParser=require('cookie-parser');

require('./connection');
require('dotenv').config({path:'./.env'});

const PORT=process.env.PORT || 3000;

app.get('/',(req,res)=>{
  res.send({
    message:'Congratulations! Your backend is working fine on port 3000 .'
  });
})

app.use(express.json());
app.use(cookieParser());

app.listen(PORT,()=>{
  console.log('Server is running on port',PORT);
})