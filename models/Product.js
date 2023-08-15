const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: String,
    price: Number,
    ProductLink:String,
    PicsURL:String,
    thumbsID: { type: mongoose.Schema.Types.ObjectId, ref: 'Thumbs' }
}) 
module.exports= mongoose.model('Product', productSchema);