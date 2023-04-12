import React from 'react';

const Descriptions = ({ items }) => {
    return (
        <>
            <ul>
                { items.map( (element, index) => { return (
                    <li key={ index }>
                        <h3>{ element.header }</h3>
                        <p>{ element.text }</p>
                    </li> )
                }) }
            </ul>
        </>
    )
};

export default Descriptions;