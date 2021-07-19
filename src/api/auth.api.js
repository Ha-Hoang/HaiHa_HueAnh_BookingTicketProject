import axios from "axios"
import { baseUrl, POST } from "../configs/api"

export const signInAPI = (user) =>{
    return axios({
        method: "POST",
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
        data: user,
    })
}

export const signUpAPI = () =>{
    return axios({
        url: `${baseUrl}/QuanLyNguoiDung/DangKy`,
        method: POST,
    });
};