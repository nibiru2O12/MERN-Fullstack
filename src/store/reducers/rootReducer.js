import {combineReducers} from 'redux';
import * as actions from '../actions/actionCreator';


function names(state=[],action){
    switch(action.type){
        case actions.ADD_NAME:
            const next = [...state].concat(name);
            return next;
            break;
        default:
            return state;
    }
}

function contest(state={},action){
    switch(action.type){
        case actions.SELECT_CONTEST:
            return action.contest;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
        names
});

export default rootReducer;