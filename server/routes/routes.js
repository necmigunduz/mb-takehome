// Routes
// Initialize express router
import express from "express";

let router = express.Router();

// Set default API response
router.get('/', (req, res) => {
    res.json({
        status: 'API is working!',
        message: 'Welcome to Resful API!'
    });
});

export default router;
