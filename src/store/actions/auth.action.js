
import { signInAPI, signUpAPI } from "../../api/auth.api"
import { SIGN_IN } from "../constants/auth.const"

export const signInAction = (user, history) =>{
    return async (dispatch) =>{
        try {
            const res = await signInAPI(user);
           
            // lưu vào localstorage
            const {hoTen, taiKhoan, maLoaiNguoiDung, accessToken , ...userLogin} = res.data;
            localStorage.setItem("hoTen", JSON.stringify(hoTen));
            localStorage.setItem("taiKhoan", JSON.stringify(taiKhoan));
            localStorage.setItem("maLoaiNguoiDung", JSON.stringify(maLoaiNguoiDung));
            localStorage.setItem("token", JSON.stringify(accessToken));
            localStorage.setItem("user",JSON.stringify(res.data));
            console.log("user", userLogin);
            dispatch({
                type: SIGN_IN,
                payload: userLogin,
            });
            history.push("/");
            
        } catch (error) {
            alert(error.response?.data)
        }
    }
}


export const signUpAction = (user, history) =>{
    return async (dispatch) =>{
        try {
            const res = await signUpAPI(user);
            history.push("/signin");
        } catch (error) {
            console.log(error);
        }
    }
}
