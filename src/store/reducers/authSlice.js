import { USER_LOGIN_SUCCESS, USER_LOGOUT } from "../actions/type";

const initialState = {
    isLoggedIn : false,
    user:{
        uid: "",
        full_name: "",
        email: "",
        role: "",
        address: "",
        mobileNumber: "",
    }

}

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case USER_LOGIN_SUCCESS:
            return{
                ...state,
                user:{
                    uid: action.payload.uid,
                    full_name: action.payload.full_name,
                    email: action.payload.email,
                    role: action.payload.role,
                    address: action.payload.address,
                    mobileNumber: action.payload.mobileNumber,
                }
            };
        
        case USER_LOGOUT:
            return initialState;
        
        default:
            return state;
    }
};

export default authReducer;