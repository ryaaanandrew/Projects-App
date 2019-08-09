import { ADD_PROJECT } from "../types";

const INITIAL_STATE = {
    projects: [
        {id: 1, title: 'test project 1', content: 'this is just a test'},
        {id: 2, title: 'test project 2', content: 'this is just a test'},
        {id: 3, title: 'test project 3', content: 'this is just a test'},
    ]
};

const projectReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ADD_PROJECT:
            console.log('in reducers', action.payload)
            return state;
        default:
            return state;
    };
};

export default projectReducer;
