import { 
    CREATE_PROJECT,
    CREATE_PROJECT_ERR
 } from "../types";

const INITIAL_STATE = {
    projects: [
        {id: 1, title: 'test project 1', content: 'this is just a test'},
        {id: 2, title: 'test project 2', content: 'this is just a test'},
        {id: 3, title: 'test project 3', content: 'this is just a test'},
    ],
    errors: []
};

const projectReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CREATE_PROJECT:
            console.log('successfully added to firestore!')
            return state;
        case CREATE_PROJECT_ERR:
            console.log('create project error: ', action.payload)
            state.errors.push(action.payload);
            return state;
        default:
            return state;
    };
};

export default projectReducer;
