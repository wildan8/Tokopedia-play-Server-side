const mongoose = require("mongoose");
const product = mongoose.model("Product");


exports.getAllDataPage = async (req, res) => {
  try {
    const products = await product.find({ thumbsID: req.params.thumbsID });
    res.status(200).json(products);
    console.log("Success GET Product data");
  } catch (error) {
    res
      .status(500)
      .json({ message: "fail to GET Product data!", error: error });
  }
};
// exports.postProduct = async (req, res) => {
//   const newProd = new product(req.body);
//   try {
//     console.log(newProd);
//     await newProd.save();
//     res.json({ message: "data POST success!" });
//   } catch (error) {
//     res
//       .status(400)
//       .json({ message: "fail to POST product data!", error: error });
//   }
// };
