import React from 'react';

const ProjectDetails = props => {
    const id = props.match.params.id;

    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title = {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum numquam porro vitae veritatis dolorem asperiores aperiam, pariatur mollitia repellat, libero labore tenetur! Placeat tempore qui perferendis animi porro! Non, deserunt.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted By Ryan</div>
                    <div>6th Aug, 2019</div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
