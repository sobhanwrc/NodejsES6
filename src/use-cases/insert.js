import mongoose from 'mongoose'
import addUser from '../entity/userModel'
 
const User = mongoose.model('Download', addUser)

// add new user deatails to the database
async function addNewDownload(data) {
    let newDownload = new User(data)
    if(await newDownload.save()){
        return true
    }else{
        return false
    }
}

export default addNewDownload;