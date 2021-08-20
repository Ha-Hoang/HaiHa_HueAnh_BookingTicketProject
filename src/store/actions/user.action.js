export const getUserInfoAction = () =>{
    let user = null;
    if(localStorage.getItem("user")){
        user = JSON.parse(localStorage.getItem('user'));
    }
    return {
        type: "GET_USER_INFO",
        payload:user
    }
}