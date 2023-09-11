const PostMessage = require('../models/postMessage.js');

const getPosts = async(req, res) => {
    try {
        const postMessages = await PostMessage.find();
        console.log(postMessages);
        res.status(200).json(postMessages);
    } catch (error) {
        console.log(error.message);
        res.status(404).json({ message: error.message });  
    }
}

const createPosts = async (req, res) => {
    const body = req.body;
    const newPost = new PostMessage(body);

    try {
      await newPost.save();
      res.status(201).json(newPost);

    } catch (error) {
        console.log(error.message);
        res.status(409).json({ message: error.message });
    }
}

module.exports = [getPosts, createPosts];