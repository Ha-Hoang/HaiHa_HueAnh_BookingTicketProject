
import { signInAPI } from "../../api/auth.api"
import { SIGN_IN } from "../constants/auth.const"

export const signInAction = (user) =>{
    return async (dispatch) =>{
        try {
            const res = await signInAPI(user);
           
            // lưu vào local storegrage
            const {taiKhoan, maLoaiNguoiDung, accessToken , ...userLogin} = res.data;
            localStorage.setItem("taiKhoan", JSON.stringify(taiKhoan));
            localStorage.setItem("maLoaiNguoiDung", JSON.stringify(maLoaiNguoiDung));
            localStorage.setItem("token", JSON.stringify(accessToken));

            dispatch({
                type: SIGN_IN,
                payload: userLogin,
            });
        } catch (error) {
            console.log(error);
        }
    }
}

