import React from 'react';

const Profile = ({ src, name, site }) => {
    return (
        <>
            <div className='avatar'>
                <img src={ src } alt="user-avatar" />
            </div>
            <div className='user-info'>
                <p>{ name }</p>
                <span>{ site }</span>
            </div>
        </>
    )
};

export default Profile;