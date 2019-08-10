import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';

const SignIn = props => {
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        props.signIn( emailRef.current.value, passwordRef.current.value );
    };

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
                    { props.authError ? <div className="red-text center">{ props.authError }</div> : null }
                </div>
            </form>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        authError: state.auth.authError
    }
};

export default connect(mapStateToProps, { signIn })(SignIn);
