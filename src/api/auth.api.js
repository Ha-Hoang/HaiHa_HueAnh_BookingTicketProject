import axios from "axios"
import { baseUrl, POST } from "../configs/api"

export const signInAPI = (user) =>{
    return axios({
        method: POST,
        url: `${baseUrl}/QuanLyNguoiDung/DangNhap`,
        data: user,
    })
}

export const signUpAPI = (user) =>{
    return axios({
        url: `${baseUrl}/QuanLyNguoiDung/DangKy`,
        method: POST,
        data: user,
    });
};

