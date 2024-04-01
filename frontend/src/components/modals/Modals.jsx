import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import LoginForms from '../forms/LoginForm';
import "./modals.css"
import SignUpForm from '../forms/SignUpForm';
import { InfoForms } from '../forms/Form';

const Modals = (props) => {
  
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      // fullscreen = 'sm-down'
      
    >
      <Modal.Header closeButton className='bg-black ' data-bs-theme="dark">
        <Modal.Title id="contained-modal-title-vcenter" className='font-[900] text-white ' >
        {props.isLogin ? "LOGIN" : "SIGN UP"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
        <InfoForms isLogin = {props.isLogin}/>
      
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  )
}

export default Modals