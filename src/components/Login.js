// Since so much of the app requires users to be able to be logged in, starting here is probably prudent.

// First you need to create a form which sends the correct data to the backend. Your register form should have a place to enter a username, a place to enter a password, and a place to enter password confirmation.

// Perhaps you want to set a min property on password and username length, and you should definitely make them required on the form inputs.

// If the form is filled out sufficiently, you'll need to make a correct AJAX request to the back end (see documentation). On successful user creation, you'll be given a token.

// That token will need to be stored somewhere, perhaps localStorage, and sent with all future requests. Any fetch request with a valid token is considered authenticated, and the user corresponding to the token is assumed by the API to be the one making the requests.

// Once you can register, you should offer a form to be able to login, and a button to be able to log out.

// Remember, the presence of the token in localStorage should be how your front end treats the user as logged in/logged out, for all decisions it needs to make regarding rendering.

// It might be useful for you to create some helper functions around this:

// logIn - which sets the token in localStorage
// logOut - which clears the token in localStorage
// isLoggedIn - which lets you know if there's a current user logged in
// And also, since you'll need them for fetch requests:

// makeHeaders - which creates a headers object with our without the bearer token depending on what is in localStorage
// For now, there are some "testing" API routes that let you see if you're currently logged in. You can hit them with fetch with headers (both logged in and logged out), and if you're setting them correctly you'll see the different responses you'll get.

// You should also provide feedback on the form if the user provides incorrect credentials, as well as if the user tries to provide bad usernames or passwords.

import React from "react";
import React from "react-dom"

const Login  = () => {

    const BASE_URL = "https://strangers-things.herokuapp.com";

    const [user, setUser] = useState ({username: '', password: ''});

    async function storeToken() {
        try {
            const response = await fetch(`${BASE_URL}/login`, {
                method: 'POST', 
                headers: {
                    'Content-=Type': 'application/json'
                },
                body: JSON.stringify(user)
            }); 
            const data = await response.json();
            localStorage.setItem('vb-token', data.token);
        } catch (error) {
            alert(error);
        }
    }

    function handleInput (event) {
        const userKey = event.target.attributes['name'].value;
        const newState = {...user};
    }

    return (
        <div>
            <Link to="/">Virtual Bartender</Link>
            <form onSubmit={handleSubmit}>
                <input type="text"
                        required
                        name="username"
                        value={user.username}
                        onChange={handleInput}
                        placeholder="username" />    
                <input type="password"
                        required
                        name="password"
                        value={user.password}
                        onChange={handleInput}
                        placeholder="password"></input>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Login;