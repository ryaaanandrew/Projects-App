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
                { props.auth.isEmpty ? <SignedOutLinks /> : <SignedInLinks /> }
            </div>
        </nav>
    );
};

const mapStateToProps = state => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(NavBar);
