import React from 'react';
import "/main.css";

const Button = ({ text, strechable, submitable }) => {
    return (
        <button 
            className={ 'btn ' + strechable && 'strech-btn' } 
            type={ submitable ? "submit" : "button"}> { text } </button>
    )
};

export default Button;