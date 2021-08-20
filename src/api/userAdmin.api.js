import axios from "axios"
import { baseUrl, DELETE, GET , POST} from "../configs/api"

export const getListUserAdminAPI = (maNhom,taiKhoan="") =>{
    if(taiKhoan.trim() !== ""){
        return axios({
            method: GET,
            url: `${baseUrl}/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${maNhom}&tuKhoa=${taiKhoan}`,
        })
    }
    return axios({
        method: GET,
        url: `${baseUrl}/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${maNhom}`
    })
}
export const addUserAdminAPI = (user,token) =>{
    return axios({
        method: POST,
        url: `${baseUrl}/QuanLyNguoiDung/ThemNguoiDung`,
        data: user,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}
export const deleteUserAPI = (taiKhoan,token) =>{
    return axios({
        method: DELETE,
        url: `${baseUrl}/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
        data: taiKhoan,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}
