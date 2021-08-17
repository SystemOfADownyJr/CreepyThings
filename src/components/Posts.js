



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





export default searchForm;

import React from "react";
import React from "react-dom"


export default Posts;
