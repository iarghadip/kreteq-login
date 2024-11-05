import mongoose from 'mongoose';

/**
 * Connect to the MongoDB database.
 */
export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/mydb', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to database.');
    } catch (error) {
        console.error('Database connection failed:', error);
    }
};