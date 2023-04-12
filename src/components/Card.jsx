import React from 'react';
import Button from "./Button";

const Card = ({ name, desc, cost, duration }) => {
    return (
        <li>
            <h4>{ name }</h4>
            <p>{ desc }</p>
            <span>{ cost }/{ duration }</span>
            <Button text={ "Подключить за " + cost } strechable = { true }></Button>
        </li>
    )
};

export default Card;