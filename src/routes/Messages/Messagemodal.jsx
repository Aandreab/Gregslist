
import { Button, Modal } from "react-bootstrap";


export default function Messagemodal({ show, onHide }) {

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Message Seller
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Title:</h4>
        <p>
          Description:
        </p>
        <p>Price:</p>
     
        <label for="message-text" class="col-form-label">Message:</label>
            <textarea class="form-control" id="message-text"></textarea>
      </Modal.Body>
      <Modal.Footer>

        <Button variant="outline-secondary" onClick={onHide}>Close</Button>
        <Button>Send Messsage</Button>
      </Modal.Footer>
    </Modal>
  );
}

