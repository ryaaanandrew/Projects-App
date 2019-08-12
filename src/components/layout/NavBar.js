import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SignedInLinks from './SignedInLinks'; 
import SignedOutLinks from './SignedOutLinks'; 


const NavBar = props => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className='brand-logo'>Planner</Link>
                { props.auth.isEmpty ? <SignedOutLinks /> : <SignedInLinks profile={props.profile}/> }
            </div>
        </nav>
    );
};

const mapStateToProps = state => {
    console.log(state);
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(NavBar);
