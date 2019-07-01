import mongoose from 'mongoose'
import addUser from '../entity/userModel'
 
const User = mongoose.model('Download', addUser)

export default function allUserDetails () {
    return async function fetchData() {
        const all_data = await User.find().sort({_id : -1});
        if(all_data.length > 0){
            return all_data
        }else{
            return false
        }
    }
}