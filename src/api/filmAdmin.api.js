import axios from "axios";
import { baseUrl, POST } from "../configs/api";

export const postFilmInfoApi = (formData) => {
  return axios({
    url: `${baseUrl}/QuanLyPhim/ThemPhimUploadHinh`,
    method: POST,
    data: formData,
  });
};
