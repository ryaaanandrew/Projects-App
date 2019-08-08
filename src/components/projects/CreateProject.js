import React, { useRef } from 'react';

const CreateProject = () => {
    const titleRef = useRef();
    const contentRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(titleRef.current.value);
        console.log(contentRef.current.value);   
    };

    return (
        <div className="container">
            <form onSubmit={(e) => handleSubmit(e)} className="white">
                <h5 className="grey-text text-darken-3">Create a project</h5>
                <div className="input-field">
                    <label htmlFor="title">project title</label>
                    <input type="text" id="title" ref={titleRef} />
                </div>
                <div className="input-field">
                    <label htmlFor="content">project ontent</label>
                    <textarea id="content" className="materialize-textarea" ref={contentRef}></textarea>
                </div>
                <div className="input-field">
                    <button className="button btn pink lighten-1 z-depth-0">create</button>
                </div>
            </form>
        </div>
    );
};

export default CreateProject;
