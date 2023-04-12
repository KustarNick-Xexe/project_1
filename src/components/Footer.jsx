import React from 'react';
import "/main.css";
import NavList from './NavList';

const Footer = ({ links }) => {
    return (
        <>
            <NavList items={ links[0] }/>
            <NavList items={ links[1] }/>
            <div>
                <p>© 2021 Tocha. Все права защищены</p>
            </div>
        </>
    )
};

export default Footer;