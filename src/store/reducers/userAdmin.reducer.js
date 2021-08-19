import { GET_LIST_USER_ADMIN } from "../constants/userAdmin.const";

const initialState = {
    listUser: []
}

export const userAdminReducer = (state = initialState, action) =>{
    const {type, payload} = action;
    switch (type) {
        case GET_LIST_USER_ADMIN:
            state.listUser = payload;
           return {...state}
        default:
            return state
    }
}
