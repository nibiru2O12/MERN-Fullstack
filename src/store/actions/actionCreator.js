import Axios from 'axios';
import { resolve } from 'path';

export const ADD_NAME = 'ADD_NAME';
export const GET_NAMES = 'GET_NAMES';
export const SELECT_CONTEST = 'SELECT_CONTEST';
export const CLEAR_SELECTED_CONTEST = 'CLEAR_SELECTED_CONTEST';

export function addNewName(contestID,names){
    return async (dispatch) => {
        try{
            await Axios.post(`/api/contest/${contestID}/${names}`);
            dispatch(getNames(contestID) );
        }catch (err){
            console.log(err);
        }
    };
}

function returnAllNames(names){
    return {
        type : GET_NAMES,
        names
    };
}

export function getNames(contestID){
    return (dispatch) => {
        fetchNames(contestID)
            .then(names => dispatch(returnAllNames(names)));
   };
}

function setSelectedContest(contest){
    return {
        type : SELECT_CONTEST,
        contest
    };
}

export function selectContest(contestID){
    return (dispatch) => {
        fetchContest(contestID)
            .then(contest => {
                dispatch(setSelectedContest(contest));
            });
    };
}

export function clearSelectedContest(){
    return {
        type : CLEAR_SELECTED_CONTEST
    };
}

const fetchContest = (contestID) => 
    Axios.get(`/api/contest/${contestID}`)
        .then(({data}) => {
            return data.contest;
        });


const fetchNames = (contestID) => 
    Axios.get(`/api/contest/${contestID}/names`)
    .then(({data}) => {
        return data;
    });