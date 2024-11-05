import express from 'express';

const router = express.Router();

/**
 * Controller for managing user profile, updates, etc.
 */
router.get('/profile', (req, res) => {
    res.send('User profile route');
});

export default router;