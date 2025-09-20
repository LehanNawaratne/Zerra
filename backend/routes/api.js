const express = require('express');
const router = express.Router();
const {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost,
    likePost,
    addComment
} = require('../controllers/postController');
const { generateContent } = require('../controllers/aiController');
const { protect } = require('../middleware/auth');

// Public routes
router.get('/posts', getPosts);
router.get('/posts/:id', getPost);

// Protected routes
router.use(protect);
router.post('/posts', createPost);
router.put('/posts/:id', updatePost);
router.delete('/posts/:id', deletePost);
router.put('/posts/:id/like', likePost);
router.post('/posts/:id/comments', addComment);

// AI routes
router.post('/ai/generate', generateContent);

module.exports = router;