import React, { useRef } from 'react';

const SignIn = () => {
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('email: ', emailRef.current.value, 'password: ', passwordRef.current.value);
    }

    return (
        <div className="container">
            <form onSubmit={(e) => handleSubmit(e)} className="white">
                <h5 className="grey-text text-darken-3">Sign in</h5>
                <div className="input-field">
                    <label htmlFor="email">email</label>
                    <input type="email" id="email" ref={emailRef} />
                </div>
                <div className="input-field">
                    <label htmlFor="password">password</label>
                    <input type="password" id="password" ref={passwordRef} />
                </div>
                <div className="input-field">
                    <button className="button btn pink lighten-1 z-depth-0">Login</button>
                </div>
            </form>
        </div>
    )
};

export default SignIn;
