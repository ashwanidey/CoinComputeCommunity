import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { InfoForms } from "../forms/InfoForm";

const Modals = (props) => {
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="bg-black " data-bs-theme="dark">
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="font-[900] text-white "
        >
          {props.isLogin ? "LOGIN" : "SIGN UP"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <InfoForms
          isLogin={props.isLogin}
          setModal={props.setModal}
          setShow={props.setShow}
          setToastName={props.setToastName}
        />
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
};

export default Modals;
