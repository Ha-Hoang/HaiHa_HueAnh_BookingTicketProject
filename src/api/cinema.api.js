import axios from "axios";
import { baseUrl, GET } from "../configs/api";

export const getCinemaListAPI = () => {
  return axios({
    url: `${baseUrl}/QuanLyRap/LayThongTinHeThongRap`,
    method: GET,
  });
};

export const getCinemaGroupAPI = (maHeThongRap) => {
  return axios({
    url: `${baseUrl}/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`,
    method: GET,
  });
};