import { GET_PERSONAL_INFO, UPDATE_INFO } from "../constants/personal-info.const";

const initialState = {
    personalInfo: {},
};

export const personalInfoReducer = (state = initialState, action) =>{
    const {type, payload} = action;
    switch (type) {
        case GET_PERSONAL_INFO:
            state.personalInfo = payload;
            return {...state}
        

        default:
            return state;

    }
} 
export const updateInfoReducer = (state=initialState, action)=>{
    const {type, payload} = action;
    switch (type) {
        case UPDATE_INFO:
            state.personalInfo =payload;
            
            return {...state};
    
        default:
            return state;
    }
} 