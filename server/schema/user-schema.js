import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment';

const userSchema =new  mongoose.Schema ({
    name: String,
    userid: String,
    email: String,
    contact: String
})

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, 'user');

const user =new mongoose.model('user', userSchema )

export default user;