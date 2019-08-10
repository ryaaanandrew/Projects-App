import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { signOut } from '../../store/actions/authActions';

const SignedInLinks = props => {

    const signOutHandler = () => {
        props.signOut();
    };

    return (
        <ul className="right">
            <li><NavLink to='/create'>New Project</NavLink></li>
            <li><NavLink to='/' onClick={signOutHandler}>Log Out</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'>RS</NavLink></li>
        </ul>
    );
};

export default connect(null, { signOut })(SignedInLinks);
