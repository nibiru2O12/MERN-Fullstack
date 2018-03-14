import {combineReducers} from 'redux';
import * as actions from '../actions/actionCreator';

function names(state=[],action){
    switch(action.type){
        case actions.ADD_NAME:
            {
                let next = [...state].concat(action.name);
                return next;
            }
       case actions.GET_NAMES :
            return action.names;
        default:
            return state;
    }
}

function contest(state= null,action){
    switch(action.type){
        case actions.SELECT_CONTEST:
            return action.contest;
        case actions.CLEAR_SELECTED_CONTEST:
            return null;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
        names,contest
});

export default rootReducer;