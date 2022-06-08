import jwt from 'jwt-decode'
function checker() {
    let user = ''

    let token = localStorage.getItem("token")
    if(token != null){
    const tokendecoded = jwt(token)
    user = tokendecoded.sub
    }

    return user

}

export default checker