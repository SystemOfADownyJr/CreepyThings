// LOADING THE USER OBJECT ON PAGE LOAD
// On page load, if there is a user logged in, you can make a GET request to /api/users/me and be given a user object. It will have all messages they've received, as well as all posts they've made (with messages partitioned by post).

// It would be most useful to do this as part of your bootstrapping whenever the page is loaded.