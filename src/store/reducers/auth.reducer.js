import { SIGN_IN} from "../constants/auth.const"

const initialState = {
    userLogin : {},
    
}

export const authReducer =  (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
    case SIGN_IN:
        state.userLogin  = payload;
        return { ...state};
    case "GET_INFO_ACTION":
        console.log(payload)
        state.userLogin  = payload;
        return { ...state}; 
    default:
        return state;
    }
}
