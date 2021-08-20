import { GET_INFO_USER_LOGIN, START_LOADING, STOP_LOADING } from "../constants/common.const";

export const startLoadingAction = () => {
  return {
    type: START_LOADING,
  };
};

export const stopLoadingAction = () => {
  return {
    type: STOP_LOADING,
  };
};

export const getInfoUserAction = () => {
  let user = null;
  if(localStorage.getItem('user')){
  }
  return {
    type: GET_INFO_USER_LOGIN,
    user
  };
};