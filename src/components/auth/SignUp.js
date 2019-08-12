import React, { useRef } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';

const SignUp = props => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const firstNameRef = useRef();
    const lastNameRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value
        };
        props.signUp(newUser);
    };

    if(props.auth.uid) return <Redirect to='/' />

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
                    <div className="red-text center">
                        { props.authErr ? <p>{ props.authErr }</p> : null }
                    </div>
                </div>
            </form>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        auth: state.firebase.auth,
        authErr: state.auth.authError
    }
};

export default connect(mapStateToProps, { signUp })(SignUp);
