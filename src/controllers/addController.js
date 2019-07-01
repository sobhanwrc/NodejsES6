export default function addNewUserToDB ({addUser}) {
    return async function add(httpRequest) {
        const headers = {
            'Content-Type': 'application/json'
        }
        try{
            const addData = await addUser(httpRequest.body)
            if(addData == 1) {
                return {
                    headers,
                    statusCode: 200,
                    body:{
                        "isSuccess" : true,
                        "message" : "User added successfully."
                    }
                }
            }
        }catch(e) {
            console.log(e,'error')
            return {
                headers,
                statusCode: 400,
                body: {
                    error: e.message
                }
            }
        }
    }
}