import axios from "axios"
import { baseUrl, GET , POST} from "../configs/api"

export const getListUserAdminAPI = (maNhom) =>{
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

