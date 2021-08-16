import axios from "axios"
import { baseUrl, POST, PUT } from "../configs/api"

export const personalInfoAPI = (user) =>{
    return axios({
        method: POST,
        url: `${baseUrl}/QuanLyNguoiDung/ThongTinTaiKhoan`,
        data: user
    })
}
export const updateInfoAPI = (user,token) =>{
    return axios ({
        method: PUT,
        url: `${baseUrl}/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
        data: user,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}