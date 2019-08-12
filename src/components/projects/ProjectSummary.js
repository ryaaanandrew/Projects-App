import React from 'react';
import moment from 'moment';

const ProjectSummary = props => {
    const { title, content, authorFirstName, authorLastName, createdAt } = props.project;

    return (
        <div className="card z-depth-0 project__summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{title}</span>
                <p>{content}</p>
                <p>{`Posted by ${authorFirstName} ${authorLastName}`}</p>
                <p className="grey-text">{moment(createdAt.toDate()).calendar()}</p>
            </div>
        </div>
    )
};

export default ProjectSummary