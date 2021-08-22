import React from 'react';
import {Route} from 'react-router-dom'

import {getUsers} from '../api';

import Login from './Login';
import Header from './Header';
import Register from './Register';
// import addPosts from './AddPosts';
// import Posts from './Posts';
import Messages from './messagesForm';


getUsers();

const App = () => {

    const [token, setToken] = useState(TokenUtilities.getToken())
    const [isLoggedIn, setIsLoggedIn] = useState(!!token)
    //not sure where to define these

    useEffect(function() {
        setIsLoggedIn(!!token)
    }, [token])

    return (
        <>
                <Header isLoggedIn={isLoggedIn} setToken={setToken} />
            <main>
                <Route path="/" />
                <Route path="/login"><Login /> </Route>
<<<<<<< HEAD
                <newPostForm />
                <postForm />
                <Route path="/messages"><Messages /> </Route>
                <searchForm />
            </main>
=======
                <Route path="/register"><Register /> </Route>
           </main>
>>>>>>> bryon-branch
        </>
    )
};



export default App