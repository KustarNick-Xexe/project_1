import React from 'react';

const Step = ({ order, name, desc}) => {
    return (
        <li>
            <div className='circle'>{ order }</div>
            <h4>{ name }</h4>
            <p>{ desc }</p>
        </li>
    )
};

export default Step;