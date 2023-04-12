import React from 'react';
import "/main.css";

const NavList = (props) => {
    const mainItem = props.items.mainItem;
    const items = props.items.items;

    return (
        <ul>
            <li className='main-item' key={ 0 }><a href="#">{ mainItem }</a></li>
            { items.map( (element, index) => <li key={ index + 1 }><a href="#">{ element }</a></li>)}
        </ul>
    )
};

export default NavList;