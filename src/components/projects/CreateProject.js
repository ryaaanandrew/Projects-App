import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions';

const CreateProject = props => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.createProject({ title, content });
    };

    if(!props.auth.uid) return <Redirect to='/signin' />;

    return (
        <div className="container">
            <form onSubmit={(e) => handleSubmit(e)} className="white">
                <h5 className="grey-text text-darken-3">Create a project</h5>
                <div className="input-field">
                    <label htmlFor="title">project title</label>
                    <input type="text" id="title"  onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className="input-field">
                    <label htmlFor="content">project ontent</label>
                    <textarea id="content" className="materialize-textarea" onChange={(e) => setContent(e.target.value)}/>
                </div>
                <div className="input-field">
                    <button className="button btn pink lighten-1 z-depth-0">create</button>
                </div>
            </form>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        auth: state.firebase.auth
    }
};

export default connect(mapStateToProps, {createProject})(CreateProject);
