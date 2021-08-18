import axios from "axios"
import { baseUrl, GET } from "../configs/api"

export const getListUserAdminAPI = (maNhom) =>{
    return axios({
        method: GET,
        url: `${baseUrl}QuanLyNguoiDung//QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${maNhom}`
    })
}