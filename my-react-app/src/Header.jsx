import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Menu from '../src/Menu.json'

function Submenu({ para }) {
  return (
    <Nav.Item>
      <NavDropdown
        title={<span className={para.textColor}>{para.lable}</span>}
        id={`dropdown-${para.lable}`} onMouseEnter={(e) => e.currentTarget.click()}
      >
        {para.dropdownmenu.map((item, index) => (
          <NavDropdown.Item
            as={Link}
            to={item.link}
            className={`fw-semibold ${item.textColor}`}
            key={index}
          >
            {item.lable}
          </NavDropdown.Item>
        ))}
      </NavDropdown>
    </Nav.Item>
  );
}

function Header() {
  return (
    <Navbar expand="lg" bg="light" variant="light" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src='Img/logo.png' alt='logo' className='img-fluid logo' />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">

            {
              Menu.map((item, index) => {
                if (item.isDropdown === true) {

                  return (
                      <Nav.Item key={index}>
                          <Submenu para={item} />
                        </Nav.Item>
                  )
                }
                else
                  return (
                    <Nav.Link as={Link} to={item.link}>{item.lable}</Nav.Link>

                  )
              })
            }



          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;