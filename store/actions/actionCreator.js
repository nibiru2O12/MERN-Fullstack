import Axios from 'axios';

export const ADD_NAME = 'ADD_NAME';
export const SELECT_CONTEST = 'SELECT_CONTEST';

export function addName(name){
    console.log(name)
    return {
        type : ADD_NAME,
        name
    };
}

function setSelectedContest(contest){
    return {
        type : SELECT_CONTEST,
        contest
    };
}

function retrieveContest(contestID){
    return (dispatch) => {
        fetchContest(contestID)
            .then(contest => {
                dispatch(setSelectedContest(contest));
            });
    };
}

const fetchContest = (contestID) => {
    Axios.get(`/api/contest/${contestID}`)
    .then(({data}) => {
        return data.contest;
    });
};

const fetchNames = (contestID) => 
    Axios.get(`/api/contest/${contestID}/names`)
    .then(({data}) => {
        return data;
    });