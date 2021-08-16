
import { signInAPI, signUpAPI } from "../../api/auth.api"
import { SIGN_IN } from "../constants/auth.const"

export const signInAction = (user, history) =>{
    return async (dispatch) =>{
        try {
            const res = await signInAPI(user);
           
            // lưu vào localstorage
            const {taiKhoan, maLoaiNguoiDung, accessToken , ...userLogin} = res.data;
            localStorage.setItem("taiKhoan", JSON.stringify(taiKhoan));
            localStorage.setItem("maLoaiNguoiDung", JSON.stringify(maLoaiNguoiDung));
            localStorage.setItem("token", JSON.stringify(accessToken));

            dispatch({
                type: SIGN_IN,
                payload: userLogin,
            });
            history.push("/");
            // console.log(userLogin);
        } catch (error) {
            console.log(error);
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
