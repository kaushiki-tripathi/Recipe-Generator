const express=require('express');
const app=express();
const cookieParser=require('cookie-parser');

require('./connection');
require('dotenv').config({path:'./.env'});

const PORT=process.env.PORT || 4000;


app.use(express.json());
app.use(cookieParser());

const UserRoutes=require('./routes/user');

app.use('/api/auth',UserRoutes);

app.listen(PORT,()=>{
  console.log('Server is running on port',PORT);
})