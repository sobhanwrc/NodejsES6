// import {addNewDownloads} from '../controllers/addController'
// import {getAllDeatils} from '../controllers/getLIstController'
import makeCallback from '../express-callback'
import {fetchUserList, addNewUser} from '../controllers'

const routes = (app) => {
    app.route('/download')
        .get(makeCallback(fetchUserList))
        .post(makeCallback(addNewUser))
 
    // app.route('/download/:id')
    //     .get(getDownload)
    //     .put(updateDownload)
    //     .delete(deleteDownload)
}
 
export default routes