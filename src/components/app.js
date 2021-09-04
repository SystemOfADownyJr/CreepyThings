import React, {useState, useEffect} from 'react';
import {Route, Switch} from 'react-router-dom'

import {getUsers} from '../api';

import Login from './Login';
import Header from './Header';
import Register from './Register';
// import addPosts from './AddPosts';
// import Posts from './Posts';
// import Messages from './messagesForm';
import TokenUtilities from '../utilities/token';
// import SearchForm from './searchForm';
import Posts from './Posts'


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
                {/* <Switch>
                    <Route path="/" />
                    <Route path="/login"><Login /></Route>
                    <Route path="/Posts"><Posts /></Route>
                </Switch> */}
                <Posts />
                {/* <newPostForm />
                <postForm /> */}
                {/* <Route path="/messages"><Messages /> </Route> */}
                {/* <SearchForm /> */}
            </main>
        </>
    )
};



export default App