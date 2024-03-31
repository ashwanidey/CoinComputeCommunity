
import './App.css'
import NavBar from './pages/navBar/NavBar'
import "bootstrap/dist/css/bootstrap.min.css";
import { Route,Routes } from 'react-router-dom';
import Test from './pages/test/Test';

function App() {
  

  return (
    <>
      <NavBar/>
      <Routes>
      <Route path = "/" element = {<div></div>}></Route>
        <Route path = "/home" element = {<><Test/></>}></Route>
      </Routes>
    </>
  )
}

export default App
