import jwt from 'jwt-decode'
function checker() {
    let role = ''

    let token = localStorage.getItem("token")
    if(token != null){
    const tokendecoded = jwt(token)
    role = tokendecoded.roles[0]

    }

    return role

}

export default checker