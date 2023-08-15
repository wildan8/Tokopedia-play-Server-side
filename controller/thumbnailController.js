const mongoose = require("mongoose");
const Thumbnail = mongoose.model("Thumbs");


exports.getAllThumbnail = async (req, res) => {
  try {
    const thumbs = await Thumbnail.find();
    res.status(200).json(thumbs);
    console.log("Success GET All thumbnail data");
  } catch (error) {
    res
      .status(500)
      .json({ message: "fail to GET Thumbnail data!", error: error });
  }
};
exports.getFirstThumbnail = async (req, res) => {
  try {
    const thumbs = await Thumbnail.findById(req.params.thumbsID);
    res.status(200).json([thumbs]);
    console.log("Success GET First Thumbnail data");
  } catch (error) {
    res
      .status(500)
      .json({ message: "fail to GET First Thumbnail data!", error: error });
  }
};


// exports.postThumbnail = async (req,res) =>{
//     const newThumbs = new Thumbnail(req.body);
//     try {
//         await newThumbs.save();
//         res.json({message:'data POST success!'})
//     } catch (error) {
//         res.status(400).json({message:'fail to POST Thumbnail data!', error:error})
//     }
// }
