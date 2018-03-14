import React, { Component } from 'react';
import {connect} from 'react-redux';
import {object} from 'prop-types';

import * as actions from '../../store/actions/actionCreator';
import Header from './Header';
import ContestList from './ContestList';
import ContestPreview from './ContestPreview';
import Axios from 'axios';
import ProposedNames from './ProposedNames/ProposedNames';
import ProposeName from './ProposedNames/ProposeName/ProposeName';

class App extends Component {

    state = this.props.intialData

    handleAddName = (name) => {
        const {id} = this.state.contest;
        this.insertPropsedName(id,name)
            .then(this.fetchContest(id))
            .catch(err => console.log(err));
    }

    handleRemoveName = (nameID) => {
        alert('removed');
    }

    handleOnSelect = (contestID) => {
        window.history.pushState({contestID : contestID},'',`/contest/${contestID}`);
        this.fetchContest(contestID);
        console.log('done fetching')
        
        // this.props.selectContest(contestID);
    }

    insertPropsedName = (contestID,name) => 
        Axios.post(`/api/contest/${contestID}/${name}`)
            .then((res) => res)
            .catch(err => console.log(err));
    

    fetchContest = (contestID) => {
        Axios.get(`/api/contest/${contestID}`)
        .then(({data}) => {
            return data.contest;
        })
        .then(contest => {
            this.fetchNames(contestID)
            .then((res) => {
                this.setState({
                    names : res.names,
                    contest : contest
                });
            });
        });
    }

    fetchNames = (contestID) => 
        Axios.get(`/api/contest/${contestID}/names`)
        .then(({data}) => {
            return data;
        });

    componentDidMount(){
        window.onpopstate = () => {
            const {state} = event;
            if(!state){
                this.setState({contest : null});
            }
        };
    }

    pageHeader = () => {
        
        if(this.state.contest){
            return this.state.contest.categoryName;
        }

        return 'Naming Contest';
    }
    
    render() {

        const {contests,contest,names} = this.state;
        const contestList =(
            contest ? <ContestPreview contest={contest} onClick = {this.handleOnSelect} /> : 
            <ContestList contests={contests} onSelect = {this.handleOnSelect} />
        );

        return (
            <div>
                <Header header={this.pageHeader()} />
                {contestList}
                {contest && names && <ProposedNames names={names} contestID={contest.id} />}
                {contest && <ProposeName  onSubmit = {this.handleAddName} />}
            </div>
        );
    }
}

App.propTypes = {
    intialData : object
};

export default (App);