import express, { Request, Response } from 'express';
import User from '../models/User';

const router = express.Router();

/**
 * Controller for handling user signup.
 */
router.post('/signup', async (req: Request, res: Response) => {
    const { username, password, email } = req.body;

    try {
        const user = new User({ username, password, email });
        await user.save();
        res.status(201).send('User created successfully.');
    } catch (error) {
        res.status(400).send('Error creating user: ' + (error as Error).message);
    }
});

/**
 * Controller for handling user login.
 */
router.post('/login', async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email, password });
        if (user) {
            res.status(200).send('Login successful.');
        } else {
            res.status(401).send('Invalid credentials.');
        }
    } catch (error) {
        res.status(400).send('Login error: ' + (error as Error).message);
    }
});

export default router;