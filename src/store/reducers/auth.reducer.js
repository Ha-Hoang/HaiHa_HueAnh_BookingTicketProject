import { SIGN_IN} from "../constants/auth.const"

const initialState = {
    userLogin : null,
    userSignUp : null,
}

export const authReducer =  (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
    case SIGN_IN:
        state.userLogin  = payload;
        return { ...state};
    
    default:
        return state;
    }
}
