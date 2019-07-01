export default function getAllUserDetails ({ listOfAllUser }) {
    return async function getUsers (httpRequest) {
      const headers = {
        'Content-Type': 'application/json'
      }
      try {
        const userTypes = await listOfAllUser()
        return {
          headers,
          statusCode: 200,
          body: {
              "isSuccess" : true,
              "data" : userTypes
          }
        }
      } catch (e) {
        // TODO: Error logging
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
  