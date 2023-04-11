import React from 'react';

const Navbar = ({ items }) => {
    return (
        <ul>
            { items.map( (element, index) => <li key={ index }><a href="#">{ element }</a></li>)}
        </ul>
    )
};

export default Navbar;