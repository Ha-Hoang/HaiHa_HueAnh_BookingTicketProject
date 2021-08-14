import { postFilmInfoApi } from "../../api/filmAdmin.api";

export const postFilmInfoAction = (formData) => {
    return async (dispatch) => {
      try {
        const res = await postFilmInfoApi(formData);
        alert("Thêm Phim Thành Công !")
        console.log(res.data);
      } catch (err) {
        console.log(err.response?.data);
      }
    };
  };