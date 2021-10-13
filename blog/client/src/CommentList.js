import React from 'react';
// eslint-disable-next-line import/no-anonymous-default-export
export default ({ comments }) => {
    
    const renderedComments = comments.map(comment => {
        let content;
        if(comment.status === 'approved') {
            content = comment.content;
        }
        if(comment.status === 'rejected') {
            content = 'this comment has been rejected';
        } 
        if(comment.status === 'pending') {
            content = 'this comment has been awaiting moderation';
        }
        return <li key={comment.id} >{content}</li>;
    });

    return <ul>
        {renderedComments}
    </ul>
};