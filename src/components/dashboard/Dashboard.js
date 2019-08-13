import React from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';

const Dashboard = props => {
    if(!props.auth.uid) return <Redirect to='/signin' />;

    return (
        <div className="dashboard container">
            <div className='row'>
                <div className="col s12 m6">
                    <ProjectList projects={props.projects}/>
                </div>
                <div className="col s12 m5 offset-m1">
                    <Notifications notifications={props.notifications}/>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    };
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
      { collection: 'projects', orderBy: ['createdAt', 'desc']},
      { collection: 'notifications', limit: 3, orderBy: ['time', 'desc'] }
    ])
)(Dashboard);
