
export const getInfoUserAction = () =>{
    let user = null;
    if(localStorage.getItem("user")){
        user = JSON.parse(localStorage.getItem("user"));

    }
    return {
        type: "GET_INFO_ACTION",
        payload: user
    }
}