import React, { useRef } from 'react';

const SignUp = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const firstNameRef = useRef();
    const lastNameRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('email: ', emailRef.current.value, 'password: ', passwordRef.current.value, firstNameRef.current.value, lastNameRef.current.value);
        emailRef.current.value = '';
    };

    return (
        <div className="container">
            <form onSubmit={(e) => handleSubmit(e)} className="white">
                <h5 className="grey-text text-darken-3">Sign Up</h5>
                <div className="input-field">
                    <label htmlFor="email">email</label>
                    <input type="email" id="email" ref={emailRef} />
                </div>
                <div className="input-field">
                    <label htmlFor="password">password</label>
                    <input type="password" id="password" ref={passwordRef} />
                </div>
                <div className="input-field">
                    <label htmlFor="firstName">first name</label>
                    <input type="text" id="firstName" ref={firstNameRef} />
                </div>
                <div className="input-field">
                    <label htmlFor="lastName">last name</label>
                    <input type="text" id="lastName" ref={lastNameRef} />
                </div>
                <div className="input-field">
                    <button className="button btn pink lighten-1 z-depth-0">Sign up</button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;
