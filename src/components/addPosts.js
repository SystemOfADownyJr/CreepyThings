

// You should make a form for users to make new listings. The fields for the form should match the fields that the API expects, and the submit button should be intercepted so that you can create the right fetch request.

// This form could live in an aside that you show only to logged in users, or on submit you could show a modal that requires a person to sign in/sign up before you create the post. If you choose to show the form for logged in users only, make sure to update the interface whenever the user logs in... not only on page load.

// The returned object is the new post. Since your state is keeping track of all available posts, it might be wise to add the returned one to that array and set state accordingly when it comes back.


// -----------------------------

// Your posts should have a way for the active user to delete them, only if isAuthor is true for the post. Go ahead and add that now.

// You'll also have to add a click handler to make that DELETE request. For each post, the delete handler will need a way to recover the post._id to help form the correct URL for the request.

// On successful delete, make sure to remove that post from the page as well as from the array that is holding all posts in state.

// -------------------------------

// For any post, you should add a form to send a message to the post author, only if there is a logged in user and the logged in user is not the one who made it.

// The message form really only needs a text input, and a button to create the message.

// Again, like the delete button, the submit handler will need a way to know how to form the correct URL so that the API responds, so make sure you're recovering it from the post element, if you're attaching it as data to begin with.



import react from "react";
import react from "react-dom"



export default addPosts;