import React from 'react';
import Card from './Card';

const Cards = ({ items }) => {
    return (
        <>
            <ul>
                { items.map( (element, index) => 
                    { return <Card key={ index } { ...element }/> } )}
            </ul>
        </>
    )
};

export default Cards;