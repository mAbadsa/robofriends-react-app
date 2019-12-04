import { 
    CHANGE_SEARCH_FIELD,
    REAUEST_ROBOTS_PENDING,
    REAUEST_ROBOTS_SUCCESS,
    REAUEST_ROBOTS_FAILED
} from './constants';

const initialSearchState = {
    searchField: ''
}

export const searchRobots = (state=initialSearchState, action={}) => {
    console.log(action.type);
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, { searchField: action.payLoad });
        default:
            return state;
    }
}

const initialRobotState = {
    isPending: true,
    robots: [],
    error: ''
}

export const requestRobots = (state=initialRobotState, action={}) => {
    switch (action.type) {
        case REAUEST_ROBOTS_PENDING:
            return Object.assign({}, state, { isPending: true });
        case REAUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, { robots: action.payLoad, isPending: false });
        case REAUEST_ROBOTS_FAILED:
            return Object.assign({}, state, { robots: action.payLoad, isPending: false });
        default:
            return state;
    }
}