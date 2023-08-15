const mongoose = require("mongoose");
const comment = mongoose.model("Comment");
const {io} = require('../server');

exports.getComment = async (req, res) => {
  try {
    const comm = await comment.find({ thumbsID: req.params.thumbsID }).sort({ time: -1 });;
    res.status(200).json(comm);
    console.log("Success GET Comment data");
  } catch (error) {
    res
      .status(500)
      .json({ message: "fail to GET comment data!", error: error });
  }
};
exports.postComment = async (req, res) => {
  const newComment = new comment(req.body);
  try {
    await newComment.save();
    io.emit("commentAdded", newComment);
    console.log("Success Post Comment data");
    res.status(200).json(newComment);
  } catch (error) {
    res
      .status(400)
      .json({ message: "fail to POST comment data!", error: error });
  }
};
