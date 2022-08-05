import React from "react";
import "./Navigation.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

const Navigation = (props) => {

  return(
  <div>
    <Navbar className="navbar" expand="lg" sticky="top">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto flex-grow-1 justify-content-evenly">
            {
              months.map((month) => {
                const monthNum = months.indexOf(month) + 1;
                return <Nav.Link className={props.date.month === monthNum ? "month selectedMonth" : "month"} onClick={() => {props.changeMonth(monthNum);}}>{month}</Nav.Link>;
              })
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>)
}

export default Navigation;