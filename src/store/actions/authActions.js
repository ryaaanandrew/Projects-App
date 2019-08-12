import { 
    SIGN_IN, 
    SIGN_IN_ERR, 
    SIGN_OUT, 
    SIGN_UP_SUCCESS, 
    SIGN_UP_ERR 
} from '../types';

export const signIn = (email, password) => async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    try {
        await firebase.auth().signInWithEmailAndPassword( email, password );
        
        dispatch({ type: SIGN_IN });
    } catch(err) {
        dispatch({ type: SIGN_IN_ERR, payload: err.message });
    };
};

export const signOut = () => async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    try {
        await firebase.auth().signOut();

        dispatch({ type: SIGN_OUT });
    } catch(err) {
        console.log(err);
    };
};

export const signUp = (newUser) => async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    
    const response = await firebase.auth().createUserWithEmailAndPassword(
        newUser.email,
        newUser.password
    ).catch(err => {
        dispatch({ type: SIGN_UP_ERR, payload: err});
    });

    if(response) {
        firestore.collection('users').doc(response.user.uid).set({
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            initials: newUser.firstName[0] + newUser.lastName[0]
        });
        dispatch({ type: SIGN_UP_SUCCESS });
    };
};