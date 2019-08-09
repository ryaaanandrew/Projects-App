import React from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectList = ({ projects }) => {
    
    const renderList = () => {
        return projects.map(project => {
            return <ProjectSummary title={project.title} content={project.content} key={project.id} />
        });
    };

    return ( 
        <div className="project__list section">
            {renderList()}
        </div>
    )
};

export default ProjectList;

