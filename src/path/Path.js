import React from 'react';
import {Route,Routes} from 'react-router-dom'
import TodoPage from '../page/TodoPage';
import Home from '../page/Home';
import AboutMe from '../page/AboutMe';
import Head from '../compents/Head';
import LoginPage from '../page/LoginPage';
import SignUpPage from '../page/SignUpPage';
import MessageCreatePage from '../page/MessageCreatePage';
import MessagePage from '../page/MessagePage';
import Sidebar from '../compents/Sidebar';
import MessageSendPage from '../page/MessageSendPage';

const Path = () => {
    // const data={
    //     velopert:{
    //         name:'김씨',
    //         description:"리액트"
    //     }
    // }

    return (

        <Routes>
            <Route element={<Head />}>
   
                    <Route path="/" element={<Home/>} />
                
                    <Route path="/TodoPage" element={<TodoPage/>} />
                    {/* <Route path="/profiles/:username" element={<AboutMe data={data}/>} /> */}
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/join" element={<SignUpPage/>}/>
                    <Route element={<Sidebar/>}>
                        <Route path="/message" element={<MessagePage/>}/>
                        <Route path="/message/mysend" element={<MessageSendPage/>}/>
                        <Route path="/message/send" element={<MessageCreatePage/>}/>
                    </Route>

            </Route>

        </Routes>

    );
};

export default Path;