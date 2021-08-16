import axios from "axios";
import { baseUrl, POST, DELETE } from "../configs/api";

export const postFilmInfoApi = (formData) => {
  return axios({
    url: `${baseUrl}/QuanLyPhim/ThemPhimUploadHinh`,
    method: POST,
    data: formData,
  });
};

export const UpdateFilmInfoApi = (formData) => {
  const token = JSON.parse(localStorage.getItem("token"));
  return axios({
    url: `${baseUrl}/QuanLyPhim/CapNhatPhimUpload`,
    method: POST,
    data: formData,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteFilmInfoApi = (maPhim) => {
  const token = JSON.parse(localStorage.getItem("token"));
  return axios({
    url: `${baseUrl}/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
    method: DELETE,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
