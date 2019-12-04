import { 
    CHANGE_SEARCH_FIELD,
    REAUEST_ROBOTS_PENDING,
    REAUEST_ROBOTS_SUCCESS,
    REAUEST_ROBOTS_FAILED
} from './constants';

export const setSearchField = (text) => {
    console.log(text);
    return {
        type: CHANGE_SEARCH_FIELD,
        payLoad: text
    }
}

export const requestRobots = () => (dispatch) => {
    dispatch({ type: REAUEST_ROBOTS_PENDING, isPending: true });
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then( data => dispatch({type: REAUEST_ROBOTS_SUCCESS, payLoad: data }))
        .catch(err => dispatch({type: REAUEST_ROBOTS_FAILED, payLoad: err }))
}


