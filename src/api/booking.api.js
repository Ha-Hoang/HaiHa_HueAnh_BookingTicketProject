import axios from "axios";
import { baseUrl, GET } from "../configs/api";

export const getListBookingAPI = (maLichChieu) => {
  return axios({
    url: `${baseUrl}/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
    method: GET,
  });
};
