const express = require("express");
const [getPosts,createPosts] = require("../controllers/posts.js");


const router = express.Router();

router.get("/", getPosts);
router.post("/", createPosts);

module.exports = router;
