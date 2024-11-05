import mongoose, { Schema, Document } from 'mongoose';

/**
 * User interface representing a user document in MongoDB.
 */
export interface IUser extends Document {
    username: string;
    password: string;
    email: string;
}

// Define the schema for the User model
const UserSchema: Schema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true }
});

// Export the User model
export default mongoose.model<IUser>('User', UserSchema);