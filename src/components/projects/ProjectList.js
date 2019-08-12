import React from 'react';
import { Link } from 'react-router-dom';
import ProjectSummary from './ProjectSummary';

const ProjectList = ({ projects }) => {
    
    const renderList = () => {
        return projects.map(project => {
            return (
                <Link to={`/project/${project.id}`} key={project.id}>
                    <ProjectSummary project={project} />
                </Link>    
            )   
        });
    };

    return ( 
        <div className="project__list section">
            {projects && renderList()}
        </div>
    )
};

export default ProjectList;

