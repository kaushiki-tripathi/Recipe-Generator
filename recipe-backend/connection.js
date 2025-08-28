const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Smart-Recipe-Generator').then(res=>{
    console.log('Connected to MongoDB');
}).catch(err=>{
    console.log('Error connecting to MongoDB',err);
})