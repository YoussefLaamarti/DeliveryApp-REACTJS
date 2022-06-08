
function Logout() {

    localStorage.removeItem("token")
    
    document.location.href = "/"
}

export default Logout