const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const imageRoutes = require('./routes/images');

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://kbtug22447:B5UAuAUJpvjWh1ww@cluster0.zebpxnv.mongodb.net/",
    {dbName: "IMG-Gallery",}
  )
  .then(() => console.log("MongoDB is Connected..!"))
  .catch((err) => console.log(err.message));


app.use('/api/images', imageRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));
