import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Experience() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="bg-white rounded-4 position-relative tabPro mt-3 p-4">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <div>
            <h5 className="fw-bold m-0 p-0">Esperienza</h5>
          </div>
          <div>
            <IconButton onClick={handleShow}>
              <AddIcon style={{ color: "black", fontSize: "30px" }} />
            </IconButton>
            <IconButton>
              <EditIcon style={{ color: "black", fontSize: "30px" }} />
            </IconButton>
          </div>
        </div>

        <div>
          <div className="d-flex align-items-center">
            <div className="me-2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuy8Th0qZPzQUtjChGa8fvmoGeCdmk9mtpWg&s"
                style={{ width: "50px", height: "50px" }}
              />
            </div>
            <div>
              <h6 className="m-0 fw-bold">Ruolo</h6>
              <p className="m-0">Area</p>
              <p className="m-0">Data inizio- Data fine</p>
              <p className="m-0">Company</p>
            </div>
          </div>
          <hr></hr>
        </div>

        <div>
          <div className="d-flex align-items-center">
            <div className="me-2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuy8Th0qZPzQUtjChGa8fvmoGeCdmk9mtpWg&s"
                style={{ width: "50px", height: "50px" }}
              />
            </div>
            <div>
              <h6 className="m-0 fw-bold">Ruolo</h6>
              <p className="m-0">Area</p>
              <p className="m-0">Data inizio- Data fine</p>
              <p className="m-0">Company</p>
            </div>
          </div>
          <hr></hr>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
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
export default Experience;
