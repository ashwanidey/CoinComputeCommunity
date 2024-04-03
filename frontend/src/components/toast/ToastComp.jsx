import React from 'react'
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

export const ToastComp = (props) => {
  
  return (
    <ToastContainer
          className="p-3"
          position='middle-center'
          style={{ zIndex: 60 }}
        >
    <Toast onClose={props.onHide} show={props.show} delay={3000} autohide>
          <Toast.Header className=''>
           
            <strong className="me-auto">{props.toastName === "login" ? "LoggedIn" : "Signed Up"}</strong>
            
          </Toast.Header>
          <Toast.Body className='text-[#00e639]'>{props.toastName === "login" ? "You have logged in successfully!" : "Your account has been registered"}</Toast.Body>
        </Toast>
        </ToastContainer>
  )
}

