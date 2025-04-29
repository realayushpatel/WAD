const express = require('express');
const router = express.Router();
const Image = require('../models/Image');

router.get('/', async (req, res) => {
  const images = await Image.find().sort({ date: -1 });
  res.json(images);
});

router.post('/', async (req, res) => {
  const { name, imageUrl, title, date } = req.body;
  const image = new Image({ name, imageUrl, title, date });
  await image.save();
  res.json(image);
});

module.exports = router;
