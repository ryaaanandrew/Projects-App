import React from 'react';

const ProjectSummary = ({ title, content }) => {
    return (
        <div className="card z-depth-0 project__summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{title}</span>
                <p>{content}</p>
                <p className="grey-text">8th Aug, 2019</p>
            </div>
        </div>
    )
};

export default ProjectSummary