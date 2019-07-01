import addNewDownload from './insert'
import allUserDetails from './list'

const listOfAllUser = allUserDetails();
const addUser = addNewDownload();

const testService = Object.freeze({
  listOfAllUser,
  addUser
})

export default testService
export { listOfAllUser, addUser }
