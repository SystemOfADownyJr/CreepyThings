// Next you should work on providing a pleasant view for all active posts.

// As the app loads you should fetch the initial posts, and populate them into the element which holds the posts.

// When you make a GET request to /api/posts, if you don't send a token, the API will only provide you with all posts. If you do, the posts made by the active user will also have the messages on them included.

// There's an additional field provided by the API, isAuthor, which is only true for posts made by the user represented by the auth token.Make sure to suppress/show certain functionality for posts based on whether or not the current user is in fact the author.