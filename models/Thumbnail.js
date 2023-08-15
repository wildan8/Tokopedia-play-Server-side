const mongoose = require('mongoose');

const thumbnailSchema = new mongoose.Schema({    
    videoURL:String, 
    picsURL:String, 
    name:String,  
});
mongoose.model('Thumbs', thumbnailSchema);