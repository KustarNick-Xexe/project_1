import React from 'react';
import Profile from './Profile';

const Comment = ({ header, text, ...profile }) => {
    return (
        <li>
            <div className='comment'>
                <p>{ header }</p>
                <p>{ text }</p>
            </div>
            <Profile {...profile}/>
        </li>
    )
};

export default Comment;