import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

// export default function ModalsItem() {
export default function ModalsItem(props) {
  const { show, handleClose, handleShow } = props;

  return (
    <>
      <button class="float-end d-flex buttonView" onClick={handleShow}>
        <span>view</span>
      </button>
      {/* <Button className="nextButton" onClick={handleShow}>
        Open Modal
      </Button> */}
      <Modal show={show} onHide={handleClose} backdrop="red" keyboard="false">
        <Modal.Header closeButton>
          <Modal.Title>title</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
