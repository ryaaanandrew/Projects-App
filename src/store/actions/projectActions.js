import { 
    CREATE_PROJECT,
    CREATE_PROJECT_ERR
} from '../types';

export const createProject = (project) => async (dispatch, getState, { getFirestore }) => {
    try {
        const firestore = getFirestore();
        await firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Ryan',
            authorLastName: 'Andrew',
            authorId: 12345,
            createdAt: new Date()            
        });
        dispatch({
            type: CREATE_PROJECT
        });
    } catch(err) {
        dispatch({
            type: CREATE_PROJECT_ERR,
            payload: err
        })
    };
};
