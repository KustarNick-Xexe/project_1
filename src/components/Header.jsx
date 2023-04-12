import React from 'react';
import Navbar from './Navbar';

const Header = ({ items, isSignIn }) => {
    return (
        <header>
            {/*  TODO: вставить логотип */}
            <Navbar items={ items }/>
        </header>
    )
};

export default Header;