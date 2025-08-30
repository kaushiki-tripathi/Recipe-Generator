const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://kaushikitripathi2005:Krati@2012@cluster1.eyu78oy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1').then(res=>{
    console.log('Connected to MongoDB');
}).catch(err=>{
    console.log('Error connecting to MongoDB',err);
})