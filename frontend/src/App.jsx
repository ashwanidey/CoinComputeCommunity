
import './App.css'

import "bootstrap/dist/css/bootstrap.min.css";
import { Route,Routes } from 'react-router-dom';
import Test from './pages/test/Test';
import {ToastComp} from './components/toast/ToastComp';
import { useState } from 'react';
import ProfilePage from './pages/profilePage/ProfilePage';
import SideBar from './pages/sidebar/SideBar';
import 'flowbite';
import Feeds from './pages/feeds/FeedsPage';
import CommentsPage from './pages/comments/CommentsPage';
import ArticlesPage from './pages/articles/ArticlesPage';
import BottomBar from './pages/bottomNavBar/BottomBar';

function App() {
  const [show,setShow] = useState(false);
  const [toastName,setToastName] = useState('');

  return (
    <>
      {/* <NavBar setShow = {setShow} setToastName = {setToastName}/> */}
      <SideBar setShow = {setShow} setToastName = {setToastName}/> 
      <ToastComp show = {show} onHide = {() => setShow(false)} toastName = {toastName}/>
      <Routes>
      <Route path = "/" element = {<><Feeds/></>}></Route>
        <Route path = "/feeds" element = {<><Feeds/></>}></Route>
        <Route path = "/home" element = {<><Test/></>}></Route>
        <Route path = "/profilepage/:userId" element = {<><ProfilePage/></>}></Route>
        <Route path = "/comments/:postId" element = {<><CommentsPage/></>}></Route>
        <Route path = "/postdetails/:postId" element = {<><CommentsPage/></>}></Route>
        <Route path = "/articles" element = {<><ArticlesPage/></>}></Route>
        
      </Routes>
      <BottomBar/>
    </>
  )
}

export default App
