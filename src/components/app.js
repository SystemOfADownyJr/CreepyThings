import React, {useState, useEffect} from 'react';
import {Route, Switch} from 'react-router-dom'

import {getUsers} from '../api/index';

import Login from './Login';
import Header from './Header';
import Register from './Register';
import Post from './Post';
import Posts from './Posts';
import AddMessage from './AddMessage';

getUsers();

const App = () => {
    return (
        <>
                <Header />
            <main>
                <Route path="/" />
                <Route path="/login"><Login /> </Route>
                <Route path="/register"><Register /> </Route>
                <Route path="/post"><Post /> </Route>
                <Route path="/posts"><Posts /> </Route>
                <Route path="/messagesForm"><AddMessage /> </Route>
           </main>
        </>
    )
};



export default App;