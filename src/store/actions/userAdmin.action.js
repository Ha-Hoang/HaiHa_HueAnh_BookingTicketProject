import { addUserAdminAPI, deleteUserAPI, getListUserAdminAPI, getTypeofUserAPI, searchUserAPI } from "../../api/userAdmin.api";
import { GET_LIST_USER_ADMIN } from "../constants/userAdmin.const";
import { startLoadingAction, stopLoadingAction } from "./common.action";

export const getListUserAdminAction = (maNhom) => {
  return async (dispatch) => {
    try {
      
      const res = await getListUserAdminAPI(maNhom);
      dispatch({
        type: GET_LIST_USER_ADMIN,
        payload: res.data,
      });
      
    } catch (error) {
      console.log(error);
    }
  };
};

export const addUserAdminAction = (user) => {
  return async () => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const res = await addUserAdminAPI(user, token);
      alert("Them thanh cong");
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteUserAction = (user) => {
  return async (dispatch) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const res = await deleteUserAPI(user,token);
      alert("Xóa tài khoản thành công !");
      dispatch(getListUserAdminAction())
      window.location.reload();
    } catch (error) {
      console.log(error.response?.data);
    }
  };
};

export const searchUserAction = (maNhom,taiKhoan) => {
  return async () => {
    try {
      const res = await searchUserAPI(maNhom,taiKhoan);
    } catch (error) {
      
    }
  };
};
