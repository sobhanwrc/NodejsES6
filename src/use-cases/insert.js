import mongoose from 'mongoose'
import addUser from '../entity/userModel'
 
const User = mongoose.model('Download', addUser)

export default function addNewDownload () {
    return async function insert(data) {
        let newDownload = new User(data)
        if(await newDownload.save()){
            return true
        }else{
            return false
        }
    }
}