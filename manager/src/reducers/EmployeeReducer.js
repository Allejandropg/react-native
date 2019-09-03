import {
    EMPLOYEES_FETCH_SUCCESS,
    EMPLOYEES_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default ( state = INITIAL_STATE, action) => {
    switch (action.type) { 
        case EMPLOYEES_FETCH_SUCCESS:
            return action.payload;
        case EMPLOYEES_SAVE_SUCCESS:
            return INITIAL_STATE;
        default:
            return state;
    }
} 