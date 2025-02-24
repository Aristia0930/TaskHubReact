import React from 'react';
import {Route,Routes} from 'react-router-dom'
import TodoPage from '../page/TodoPage';
import Home from '../page/Home';
import AboutMe from '../page/AboutMe';
import Head from '../components/Head';
import LoginPage from '../page/LoginPage';
import SignUpPage from '../page/SignUpPage';
import MessageCreatePage from '../page/MessageCreatePage';
import MessagePage from '../page/MessagePage';
import Sidebar from '../components/Sidebar';
import MessageSendPage from '../page/MessageSendPage';
import UpdateHistoryPage from '../page/UpdateHistoryPage';
import ProfilePage from '../page/ProfilePage';
import Notice from '../page/Notice';
import NoticeWrite from '../page/NoticWrite';
import NoticeViewPage from '../page/NoticeViewPage';
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
                    <Route path="/hisorypage" element={<UpdateHistoryPage/>}/>
                    <Route path="/profile/mypage" element={<ProfilePage/>}/>
                    <Route path="/notice" element={<Notice/>}/>
                    <Route path="/notice/write" element={<NoticeWrite/>}/>
                    <Route path="/notice/view/:id" element={<NoticeViewPage/>}/>
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