import React, { useState } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import {Button , Modal} from "react-bootstrap";
// import { Link } from "react-router-dom";
import { BrowserRouter as Router, Link } from "react-router-dom";
import SignUp  from "../routes/SignUp";


function Navbar() {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const [state, handleState] = useState(false);
  function handleClick() {
    return handleState(!state);
  }
  return (
    <>
    <div>
    <div><nav className="NavbarItems">
        <h1 className="navbar-logo">EAid</h1>
        <div className="menu-icons" onClick={handleClick}>
          <i className={state ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={state ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <div className={item.class}>
              <li key={index}>
                <Link to={item.url} className={item.cName}>
                  <i className={item.icon} aria-hidden="true"></i>
                  {item.title}
                </Link>
              </li>
              </div>
            );
          })}
          {/* <Link to="/signin"> */}
            {/* <Button  >Sign Up</Button> */}
            {/* <Button variant="primary" onClick={handleShow}> Sign In </Button> */}
          {/* </Link> */}
        </ul>
      </nav></div>
        {/* <div>
        <Modal show={show} onHide={handleClose} style={{ display: "flex", justifyContent: "center",alignItems:"center",marginTop:"60px"}}>
        <Modal.Header closeButton>
          <Modal.Title>
          <p>Login To Coninue</p>
         
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ marginTop:"-15px",padding:"0"}}><SignUp /></Modal.Body>
      </Modal>
        </div> */}
    </div>
    
       
     
      {/* {pop ? <Form /> : ""} */}
    </>
  );
}
export default Navbar;
