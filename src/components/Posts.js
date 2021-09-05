import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Post from './Post';
import Index from '../index';
import Messages from './messagesForm'

function Posts(props) {
  const [postList, setPostList] = useState([]);
  const BASE = 'https://strangers-things.herokuapp.com/api/2105-OKU-RM-WEB-PT/'

  const getToken = () => {
    const BASE_URL = "https://strangers-things.herokuapp.com/api/2105-OKU-RM-WEB-PT/";

    const [userPost, setUserPost] = useState ('');
  
    async function postsToken(event) {
      event.preventDefault();
        try {
        const response = await fetch(`${BASE_URL}/users/posts`, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
              body: JSON.stringify({
                user: {
                  username: 'TBirdwell',
                  password: 'password123!'
                }
                
        
              }
              )
            }
            );
        const data = await response.json();
        localStorage.setItem('vb-token', data.token);
      } catch (error) {
          console.error("You're Wrong");
      }
        }
      }

  useEffect(async function() {
    try {
      // postsToken()
      const response = await fetch(`${BASE}/posts`)
      const data = await response.json();
      setPostList(data.data.posts);
  } catch(error) {
      console.error("error " + error);
    }
  }, []);

  const postElements=postList.map((post, i) => 
    <div key={i}>
      <p>Title : {post.title}</p>
      <p>Description : {post.description}</p>
      <p>Price : {post.price}</p>
      <p>Created_At : {post.createdAt}</p>
      <p>Updated_At : {post.updatedAt}</p>
      <p>Location : {post.location}</p>
      <p>Will_Deliver : {post.willDeliver}</p>
      <p>Author : {post.author.username}</p>
      <p>Message : {post.message}</p>
      <Messages />
      </div>)
  return (
    <div id="post-hub">
      {postElements}
    </div>
  )
  }



export default Posts 

//
//Still need to:
//Get token for message display on posts,
//Figure out if/where functions need to be invoked,
//...
//Maybe more...
//



