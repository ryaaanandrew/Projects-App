import { SIGN_IN, SIGN_IN_ERR, SIGN_OUT } from '../types';

export const signIn = (email, password) => async (dispatch, getState, { getFirebase }) => {
    try {  
        const firebase = getFirebase();
        await firebase.auth().signInWithEmailAndPassword( email, password );
        dispatch({
            type: SIGN_IN
        });
    } catch(err) {
        dispatch({
            type: SIGN_IN_ERR,
            payload: err.message
        });
    };
};

export const signOut = () => async (dispatch, getState, { getFirebase }) => {
    try {
        const firebase = getFirebase();
        await firebase.auth().signOut();

        dispatch({
            type: SIGN_OUT
        });
    } catch(err) {
        console.log(err);
    };
};