const express = require("express");
const path = require("path");
const router = express.Router();
const blogs = require("../data/blogs");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../template/index.html"));
});

router.get("/blogs", (req, res) => {
  blogs.forEach((e) => {
    console.log(e.title);
  });
  res.sendFile(path.join(__dirname, "../template/bloghome.html"));
});
module.exports = router;
