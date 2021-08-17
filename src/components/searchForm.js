// As part of your listings, add a little search form. Listen to the user typing into the field, and filter the listings in your state based on that.

// One thing that is tempting is to replace the state with the results of the filter, but this will mean that if the user deletes the filter, or chooses to filter a new term, that you'd have to re-fetch the original list of postings.

// Instead, keep a searchTerm in your state, and map over the postsToDisplay (or whatever you call it) instead of posts after the filter is applied. Below is a very loose attempt at providing some structure. You'll have to fill in the holes.