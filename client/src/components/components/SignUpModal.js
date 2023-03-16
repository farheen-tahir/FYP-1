import {useState} from "react";
import {Button , Modal} from "react-bootstrap";
import "./FormStyles.css";
import Login from "./Login";
import Form from "./Form"
function SignUpModal({show,handleClose}) {
    const[showRegister,setshowRegister]=useState(false);
    return (
        <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal
     show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        style={{marginTop:"30px"}}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter"  >
        <div className="d-flex justify-content-between flex-row" >
           <h2 className="modal-heading" onClick={() => setshowRegister(false)} style={{color: "red", cursor : "pointer"}}>Sign In</h2>
            <h2 onClick={() => setshowRegister(true)} style={{ cursor: "pointer"}} >Sign Up</h2>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      {showRegister ? <Form/>: <Login /> }
      
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={handleClose}>Close</Button>
      </Modal.Footer> */}
    </Modal>
    </>
    )
}
export default SignUpModal;