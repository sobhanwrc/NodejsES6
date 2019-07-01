import {listOfAllUser, addUser} from '../use-cases'
import addNewUserToDB from './addController'
import getAllUserDetails from './getLIstController'

const fetchUserList = getAllUserDetails({listOfAllUser});
const addNewUser = addNewUserToDB({addUser})

const userTypeController = Object.freeze({
    fetchUserList,
    addNewUser
})

export default userTypeController
export { fetchUserList, addNewUser }