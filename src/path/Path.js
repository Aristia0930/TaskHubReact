import React from 'react';
import {Route,Routes} from 'react-router-dom'
import TodoPage from '../page/TodoPage';
import Home from '../page/Home';
import AboutMe from '../page/AboutMe';
import Head from '../page/Head';
import LoginPage from '../page/LoginPage';
import SignUpPage from '../page/SignUpPage';
const Path = () => {
    const data={
        velopert:{
            name:'김민준',
            description:"리액트"
        }
    }

    return (

        <Routes>
            <Route element={<Head />}>
                <Route path="/" element={<Home/>} />
            
                <Route path="/TodoPage" element={<TodoPage/>} />
                <Route path="/profiles/:username" element={<AboutMe data={data}/>} />
            </Route>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/join" element={<SignUpPage/>}/>
        </Routes>

    );
};

export default Path;