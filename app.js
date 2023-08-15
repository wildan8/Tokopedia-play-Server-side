require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

require('./models/Thumbnail');
require('./models/Product');
require('./models/Comment');

mongoose.connect(mongoString, { useNewUrlParser: true, useUnifiedTopology: true });
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error);
});
database.once('open', () => {
  console.log('Database connected');
});

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const thumbnailRoute = require('./routes/thumbnail');
// const productRoutes = require('./routes/product');
// const commentRoutes = require('./routes/comment');
app.use('/thumbnail', thumbnailRoute);
// app.use('/product', productRoutes);
// app.use('/comment', commentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
