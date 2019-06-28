import mongoose from 'mongoose'
 
const Schema = mongoose.Schema
 
const addUser = new Schema({
    userName: {
        type: String,
        required: 'User Name is required'
    },
    userAddress: {
        type: String,
        required: 'User addess is required.'
    }
})
 
export default addUser;
