import addNewDownload from './insert'
import allUserDetails from './list'

const getUserAllDetails = allUserDetails();

const commentService = Object.freeze({
  getUserAllDetails
})

export default commentService
export { getUserAllDetails }
