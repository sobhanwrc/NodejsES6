import addNewDownload from '../use-cases/insert'
 
// add new user to the database
export const addNewDownloads = async (req, res) => {
    var addResult = await addNewDownload(req.body)
    if(addResult == true){
        res.json({
            success: true,
            message : "User details added successfully."
        })
    }else{
        res.json({
            success: false,
            message : "User details added faild."
        })
    }
}