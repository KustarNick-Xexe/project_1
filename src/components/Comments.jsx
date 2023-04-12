import React from 'react';
import Comment from './Comment';

const Comments = ({ items }) => {
    return (
        <>
            <ul>
                { items.map( (element, index) => 
                    { return <Comment key={ index } { ...element }/> } )}
            </ul>
        </>
    )
};

export default Comments;