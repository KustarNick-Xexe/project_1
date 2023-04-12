import React from 'react';
import Step from './Step';

const Steps = ({ items }) => {
    return (
        <>
            <ul>
                { items.map( (element, index) => 
                    { return <Step key={ index } order={ index + 1 } { ...element }/> } )}
            </ul>
        </>
    )
};

export default Steps;