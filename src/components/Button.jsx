import React from 'react';
import "/main.css";

const Button = ({ text, strechable }) => {
    return (
        <button className={ 'btn ' + strechable && 'strech-btn' }>{ text }</button>
    )
};

export default Button;