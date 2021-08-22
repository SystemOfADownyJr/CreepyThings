import React, { useState } from 'react';

const Post = ({title, description, price, createdAt, updatedAt, location, willDeliver, messages, id /*author*/}) => {
    return (
        <div className="post">
            <div>
                <p>title: {title}</p>
                <p>name: {description}</p>
                <p>amount: {price}</p>
                <p>created at: {createdAt}</p>
                <p>updated at: {updatedAt}</p>
                <p>location: {location}</p>
                <p>will deliver: {willDeliver}</p>
                <p>messages: {messages}</p>
                {/* <p>type: {author}</p> */}
            </div>
        </div>
    )
}

export default Post;