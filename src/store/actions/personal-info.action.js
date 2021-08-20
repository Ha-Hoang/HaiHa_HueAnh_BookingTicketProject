import { personalInfoAPI, updateInfoAPI } from "../../api/personal-info.api";
import { GET_PERSONAL_INFO, UPDATE_INFO} from "../constants/personal-info.const";
import { startLoadingAction, stopLoadingAction } from "./common.action";

export const getPersonalInfoAction = (user) =>{
    return async (dispatch) =>{

        try {
            dispatch(startLoadingAction());
            const res = await personalInfoAPI(user);
            dispatch({
                type: GET_PERSONAL_INFO,
                payload: res.data,
            })
            
            dispatch(stopLoadingAction());
        } catch (error) {
            console.log(error);
        }
    }
}
export const updateInfoAction = (user) =>{
    return async (dispatch) =>{
        try {
        const token = JSON.parse(localStorage.getItem('token'));
        console.log("token action",token)
        const res = await updateInfoAPI(user,token);

            dispatch({
                type: UPDATE_INFO,
                payload: res.data,
            })
            dispatch(getPersonalInfoAction(user))
            alert("Cập nhật thành công");

        } catch (error) {
            console.log(error);
        }
    }
}
