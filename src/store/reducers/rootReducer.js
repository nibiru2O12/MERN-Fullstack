import {combineReducers} from 'redux';
import * as actions from '../actions/actionCreator';

function names(state=[],action){
    console.log('asdasd',action.type);
    switch(action.type){
        case actions.ADD_NAME:
            const next = [...state].concat(name);
            return next;
            break;
       case actions.GET_NAMES :
            console.log('names',action.names)
            return action.names
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