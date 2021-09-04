// import { description } from 'commander';
// import { CreateDataProperty } from 'es-abstract';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Post from './Post';
import Index from '../index';

function Posts(props) {
  const postList = useState([]);
  const BASE = 'https://strangers-things.herokuapp.com/api/2105-OKU-RM-WEB-PT/'

  async function getPosts() {
    fetch(`${BASE}posts`)
    .then(response => response.json())
    .then(result => {
      return result;
    })
}


  // async function getPosts() {
  //   const response = await fetch('https://strangers-things.herokuapp.com/api/2105-OKU-RM-WEB-PT/posts', {
  //     method,
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     // body: JSON.stringify(data)
  //   });
  //   const responseData = await response.json();
  //   return responseData;
  // }

  useEffect(async function() {
    try {
      const data = await getPosts();
      postList(data);
      // console.log(postList);
  } catch(error) {
      console.error("error " + error);
    }
  }, []);
  
  console.log(postList);
  console.log("where am, i")
  var post;
  // console.log(postList.map((post, i) => post))
  // for (let i = 0; i < postList.length; i++) {
  //   console.log(postList[i]);
  // }
  const postElements = postList.map((post, i) => <Post title={post.title}
                                                      description={post.description}
                                                      price={post.price}
                                                      createdAt={post.createdAt}
                                                      updatedAt={post.updatedAt}
                                                      location={post.location}
                                                      willDeliver={post.willDeliver}
                                                      messages={post.messages}
                                                      // author={post.author.username}
                                                      // key={post.id}
                                                      />);

                                          

  
  
  return (
    <div id="post-hub">
      {postElements}
    </div>
  )
  }
export default Posts 











// Next you should work on providing a pleasant view for all active posts.

// As the app loads you should fetch the initial posts, and populate them into the element which holds the posts.

// When you make a GET request to /api/posts, if you don't send a token, the API will only provide you with all posts. If you do, the posts made by the active user will also have the messages on them included.

// There's an additional field provided by the API, isAuthor, which is only true for posts made by the user represented by the auth token.Make sure to suppress/show certain functionality for posts based on whether or not the current user is in fact the author.

// _____________________

// LOADING THE USER OBJECT ON PAGE LOAD
// On page load, if there is a user logged in, you can make a GET request to /api/users/me and be given a user object. It will have all messages they've received, as well as all posts they've made (with messages partitioned by post).

// It would be most useful to do this as part of your bootstrapping whenever the page is loaded.

// _____________________

// For any post, you should add a form to send a message to the post author, only if there is a logged in user and the logged in user is not the one who made it.

// The message form really only needs a text input, and a button to create the message.

// Again, like the delete button, the submit handler will need a way to know how to form the correct URL so that the API responds, so make sure you're recovering it from the post element, if you're attaching it as data to begin with.

// -----------------------

// Next you should work on providing a pleasant view for all active posts.

// As the app loads you should fetch the initial posts, and populate them into the element which holds the posts.

// When you make a GET request to /api/posts, if you don't send a token, the API will only provide you with all posts. If you do, the posts made by the active user will also have the messages on them included.

// There's an additional field provided by the API, isAuthor, which is only true for posts made by the user represented by the auth token.Make sure to suppress/show certain functionality for posts based on whether or not the current user is in fact the author.

// ---------

// As part of your listings, add a little search form. Listen to the user typing into the field, and filter the listings in your state based on that.

// One thing that is tempting is to replace the state with the results of the filter, but this will mean that if the user deletes the filter, or chooses to filter a new term, that you'd have to re-fetch the original list of postings.

// Instead, keep a searchTerm in your state, and map over the postsToDisplay (or whatever you call it) instead of posts after the filter is applied. Below is a very loose attempt at providing some structure. You'll have to fill in the holes.





// export default searchForm;

// import React from "react";
