import React from 'react';

const Button = ({ text, strechable }) => {
    return (
        <button className={ 'btn ' + strechable && 'strech-btn' }>{ text }</button>
    )
};

export default Button;