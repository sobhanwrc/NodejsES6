import {addNewDownloads} from '../controllers/addController'
import {getAllDeatils} from '../controllers/getLIstController'
 
const routes = (app) => {
    app.route('/download')
        .get(getAllDeatils)
        .post(addNewDownloads)
 
    // app.route('/download/:id')
    //     .get(getDownload)
    //     .put(updateDownload)
    //     .delete(deleteDownload)
}
 
export default routes