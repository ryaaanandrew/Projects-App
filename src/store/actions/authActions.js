import { 
    SIGN_IN, 
    SIGN_IN_ERR, 
    SIGN_OUT, 
    SIGN_UP_SUCCESS, 
    SIGN_UP_ERR 
} from '../types';

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

export const signUp = (newUser) => async (dispatch, getState, { getFirebase, getFirestore }) => {
    try {
        const firebase = getFirebase();
        const firestore = getFirestore();

        const response = await firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        );

        firestore.collection('users').doc(response.user.uid).set({
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            initials: newUser.firstName[0] + newUser.lastName[0]
        });

        dispatch({
            type: SIGN_UP_SUCCESS
        });
    } catch(err) {
        console.log(err);
        dispatch({
            type: SIGN_UP_ERR
        });
    }
};