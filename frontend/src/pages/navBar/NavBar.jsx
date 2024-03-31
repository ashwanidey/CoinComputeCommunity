import React, { useState } from 'react'
import "./navBar.css"
import { NavLink, useNavigate } from 'react-router-dom';
import Modals from '../../components/modals/Modals';

const navLinkStyle = {
  fontSize : "1.2rem",
}

const NavBar = () => {
  const [showModal, setShowModal] = useState(false);
  const [isLogin,setIsLogin] = useState(false);

  
  return (
    <>
    <nav className=''>
      
      <h1 className='text-white whitespace-nowrap ml-[20px] font-[900] text-[1.4rem]'>CODE COMPUTE</h1>
    <input type="checkbox" id="sidebar-active"/>
    <label for="sidebar-active" class="open-sidebar-button ml-auto">
      <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
    </label>
    <label id="overlay" for="sidebar-active"></label>
    <div class="links-container">
      <label for="sidebar-active" class="close-sidebar-button">
        <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
      </label>

    
     <ul className='md:flex md:h-full md:ml-auto items-center mb-0'>
      <NavLink to="/home">Home</NavLink>
      <a href="about.html">Feeds</a> 
      <a href="products.html">News</a>
      <a href="blog.html">Blog</a>
      <div className='flex md:h-[60%] ml-[20px] flex-row md:flex-col gap-2'>
      <button class="button-39 flex items-center close-sidebar-button"  role="button" onClick={() =>{setShowModal(true); setIsLogin(true)}} >Login</button>
      <button class="button-39  flex items-center " role="button" onClick={() =>{setShowModal(true); setIsLogin(false)} }>SignUp</button>
      </div>
      </ul>
      
    </div>
    
  </nav>
    <Modals
    show={showModal}
    onHide={() => setShowModal(false)}
    login = {isLogin}
    />
    </>
  )
}

export default NavBar