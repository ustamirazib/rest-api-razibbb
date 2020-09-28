const express = require('express');

//Import models
const Posts = require('../models/Posts');

const router = express.Router();

//!SHOW ALL POSTS

router.get('/', async (req, res) => {
    const posts = await Posts.find()
    res.json(posts)
});


//!CREATE POSTS
router.post('/', async (req, res) => {
    const post = new Posts({
        title: req.body.title,
        description: req.body.description
    });
    try {
        const MakePosts = await post.save()
        res.json(MakePosts)
    } catch (error) {
        res.json({ messages: error })
    }

});

//!Update
router.patch("/:postId", async (req, res) => {
    try {
        const updatePost = await Posts.updateOne(
            { _id: req.params.postId },
            {
                $set: {
                    title: req.body.title
                }
            })
        res.json(updatePost)
    } catch (error) {
        res.json({ messages: error })
    }
})

//!SPECIFIC POST

router.get("/:postId", async (req, res) => {
    try {
        const post = await Posts.findById(req.params.postId)
        res.json(post)
    } catch (error) {
        res.json({ messages: error })
    }

})

//! DELETE POST
router.delete('/:postId', async (req, res) => {
    try {
        const removePost = await Posts.remove({ _id: req.params.postId });
        res.json(removePost)
    } catch (error) {
        res.json({ messages: error })
    }
})

module.exports = router