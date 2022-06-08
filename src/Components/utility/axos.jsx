import axios from 'axios';
let token = localStorage.getItem("token")
if(token == null)token = ""

if(token != "") {
    axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
}

export default axios;