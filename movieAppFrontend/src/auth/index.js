
export const doLogin =(data)=>{
    localStorage.setItem("token",JSON.stringify(data.accessToken))
    localStorage.setItem("LoginId",data.username)
    localStorage.setItem("role",data.roles[0])
}

export const isUserLogin = () =>{
    let token = localStorage.getItem("token")
    if(( token != null || token != "") && localStorage.getItem("role")=="ROLE_USER")
        return true
    else 
        return false
}

export const isAdminLogin = () =>{
    let token = localStorage.getItem("token")
    if(( token != null || token != "") && localStorage.getItem("role")=="ROLE_ADMIN")
        return true
    else 
        return false
}

export const doLogout = () =>{
    localStorage.removeItem("token")
    localStorage.removeItem("LoginId")
    localStorage.removeItem("role")
    localStorage.removeItem("movieName");
    localStorage.removeItem("theatreName")
}