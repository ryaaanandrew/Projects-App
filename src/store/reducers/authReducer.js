import {
    SIGN_IN,
    SIGN_IN_ERR,
    SIGN_OUT
} from '../types';

const INITIAL_STATE = {
    authError: ''
};

const authReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SIGN_IN:
            console.log('login success');
            return { ...state, authError: null };
        case SIGN_IN_ERR:
            console.log('login error: ', action.payload);
            return { ...state, authError: action.payload };
        case SIGN_OUT:
            console.log('signout success');
            return state;
        default:
            return state;
    };
};

export default authReducer;
