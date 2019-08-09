import { ADD_PROJECT } from '../types';

export const createProject = (project) => {
    return {
        type: ADD_PROJECT,
        payload: project
    }
};