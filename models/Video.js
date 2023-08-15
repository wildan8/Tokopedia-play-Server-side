const videoSchema = new mongoose.Schema({
    name:String, 
    linkVideo:String
    
}) 
mongoose.model('Video', videoSchema);