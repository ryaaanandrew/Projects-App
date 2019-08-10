import { firestoreReducer }  from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import projectReducer from './projectReducer';

export default combineReducers({
    auth: authReducer,
    projects: projectReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});
