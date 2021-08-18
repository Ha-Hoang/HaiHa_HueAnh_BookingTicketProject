import { GET_LIST_USER_ADMIN} from "../constants/userAdmin.const";

export const getListUserAdmin = () =>{
    return async (dispatch) =>{
        try {
            const res = await getListUserAdmin();
            dispatch({
                type: GET_LIST_USER_ADMIN,
                payload: res.data,
            })
            console.log("user",res.data)
        } catch (error) {
            console.log(error);
        }
    }
}