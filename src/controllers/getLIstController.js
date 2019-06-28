import allUserDetails from '../use-cases/list'

// fetch result
export const getAllDeatils = async (req,res) => {
    const data = await allUserDetails();
    if(data.length > 0){
        res.json({
            data : data,
            success : true
        })
    }else{
        res.json({
            success : false,
            message : "No data found."
        })
    }
}