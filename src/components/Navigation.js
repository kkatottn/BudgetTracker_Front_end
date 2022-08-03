import React from "react";
import "./Navigation.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = (props) => {

  return(
  <div>
    <Navbar className="navbar" expand="lg" sticky="top">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto flex-grow-1 justify-content-evenly">
            <Nav.Link className="month" onClick={() => {props.changeMonth(1);}}>Jan</Nav.Link>
            <Nav.Link className="month" onClick={() => {props.changeMonth(2);}}>Feb</Nav.Link>
            <Nav.Link className="month" onClick={() => {props.changeMonth(3);}}>Mar</Nav.Link>
            <Nav.Link className="month" onClick={() => {props.changeMonth(4);}}>Apr</Nav.Link>
            <Nav.Link className="month" onClick={() => {props.changeMonth(5);}}>May</Nav.Link>
            <Nav.Link className="month" onClick={() => {props.changeMonth(6);}}>Jun</Nav.Link>
            <Nav.Link className="month" onClick={() => {props.changeMonth(7);}}>Jul</Nav.Link>
            <Nav.Link className="month" onClick={() => {props.changeMonth(8);}}>Aug</Nav.Link>
            <Nav.Link className="month" onClick={() => {props.changeMonth(9);}}>Sep</Nav.Link>
            <Nav.Link className="month" onClick={() => {props.changeMonth(10);}}>Oct</Nav.Link>
            <Nav.Link className="month" onClick={() => {props.changeMonth(11);}}>Nov</Nav.Link>
            <Nav.Link className="month" onClick={() => {props.changeMonth(12);}}>Dec</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>)
}

export default Navigation;