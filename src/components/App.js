import React, { Component } from 'react';
import {connect} from 'react-redux';
import {object,array} from 'prop-types';

import * as actions from '../store/actions/actionCreator';
import Header from './Header';
import ContestList from './ContestList';
import ContestPreview from './ContestPreview';
import ProposedNames from './ProposedNames/ProposedNames';
import ProposeName from './ProposedNames/ProposeName/ProposeName';

class App extends Component {

    state = this.props.intialData

    handleAddName = (name) => {
        
        const id = this.props.contest.id

        this.props.insertNewName(id,name);
    }

    handleRemoveName = (nameID) => {
        alert('removed');
    }

    handleOnSelect = (contestID) => {
        // this.fetchContest(contestID);
        // console.log('done fetching')

        window.history.pushState({contestID : contestID},'',`/contest/${contestID}`);
        this.props.selectContest(contestID);
        this.props.getNames(contestID);

    }

    componentDidMount(){
        window.onpopstate = () => {
        this.props.clearSelectedContest()
        const {state} = event;
            if(!state){
        this.setState({contest : null});
            }
        };
    }

    pageHeader = () => {

        if(this.props.contest){
            return this.props.contest.categoryName;
        }

        return 'Naming Contest';
    }

    render() {


        const {contest,names} = this.props;
        const {contests} = this.state;

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
    intialData : object,
    names : array
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectContest : (contestID) => dispatch(actions.selectContest(contestID)) ,
        clearSelectedContest : () => dispatch(actions.clearSelectedContest()),
        insertNewName : (contestID,name) => dispatch(actions.addNewName(contestID,name)),
        getNames : (contestID) => dispatch(actions.getNames(contestID)),
    };
};

const mapStateToProps = (state) => {
    return {
        names: state.names ,
        contest : state.contest
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(App);