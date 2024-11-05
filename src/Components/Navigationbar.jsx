import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FiMenu, FiX } from 'react-icons/fi';

const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Navbar expand="md" className="bg-black sticky-top px-4 py-3 z-50 shadow-md">
      <Navbar.Brand href="#home" className="text-2xl font-bold text-white">
        Harsitha
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="navbar-nav"
        onClick={() => setMenuOpen(!menuOpen)}
        className="border-0"
      >
        {menuOpen ? <FiX size={24} color="white" /> : <FiMenu size={24} color="white" />}
      </Navbar.Toggle>
      <Navbar.Collapse id="navbar-nav" className={`${menuOpen ? 'show' : ''}`}>
        <Nav className="ms-auto">
          {['Home', 'Experience', 'Projects', 'Contact'].map((item) => (
            <Nav.Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white px-3 py-2"
            >
              {item}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;



