import React from 'react';
import Button from './Button';

const ConnectionForm = ({ header }) => {
    return (
        <div className='connection-form'>
            <h3> { header } </h3>
            <input type="email" id="email" name="email" placeholder="Введите email" required />
            <Button text="Отправить" submitable={ true } />
        </div>
    )
};

export default ConnectionForm;