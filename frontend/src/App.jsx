
import './App.css'
import NavBar from './pages/navBar/NavBar'
import "bootstrap/dist/css/bootstrap.min.css";
import { Route,Routes } from 'react-router-dom';
import Test from './pages/test/Test';
import {ToastComp} from './components/toast/ToastComp';
import { useState } from 'react';
import ProfilePage from './pages/profilePage/ProfilePage';
import SideBar from './pages/sidebar/SideBar';
import 'flowbite';

function App() {
  const [show,setShow] = useState(false);
  const [toastName,setToastName] = useState('');

  return (
    <>
      {/* <NavBar setShow = {setShow} setToastName = {setToastName}/> */}
      <SideBar setShow = {setShow} setToastName = {setToastName}/> 
      <ToastComp show = {show} onHide = {() => setShow(false)} toastName = {toastName}/>
      <Routes>
      <Route path = "/" element = {<div></div>}></Route>
        <Route path = "/home" element = {<><Test/></>}></Route>
        <Route path = "/profilepage" element = {<><ProfilePage/></>}></Route>
      </Routes>
    </>
  )
}

export default App
