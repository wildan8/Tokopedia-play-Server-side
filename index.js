const express = require("express");
const cors = require("cors");
const http = require("http");
const socketIO = require("socket.io");

const app = express();
const server = http.createServer(app);

const io = socketIO(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET,HEAD,PUT,PATCH,POST"],
    credentials: true,
  },
});

require("dotenv").config();

app.use(cors({
  origin: "http://localhost:3000", // Replace with your client's URL
  methods: "GET,HEAD,PUT,PATCH,POST",
  credentials: true,
}));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});
module.exports = { io };

const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL;
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});
database.once("open", () => {
  console.log("database connected");
});

require("./models/Thumbnail");
require("./models/Product");
require("./models/Comment");

const thumbnailRoute = require("./routes/thumbnail");
const productRoutes = require("./routes/product");
const commentRoutes = require("./routes/comment");

app.use("/thumbnail", thumbnailRoute);
app.use("/product-detail", productRoutes);
app.use("/comment", commentRoutes);

// This displays message that the server running and listening to specified port
const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
