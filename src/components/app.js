import React, {useState, useEffect} from 'react';
import {Route, Switch} from 'react-router-dom'

import {getUsers} from '../api';

import Login from './Login';
import Header from './Header';
import Register from './Register';
// import addPosts from './AddPosts';
import Post from './Post';


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
           </main>
        </>
    )
};



export default App;