import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const SidebarAdministrativo = () => {
  return (
    <Navbar bg="light" expand="lg" className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="flex-column">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="">Serviços</Nav.Link>
          <Nav.Link href="#">Funcionários</Nav.Link>
          <Nav.Link href="#">Marcação</Nav.Link>
          <Nav.Link href="#">Agenda</Nav.Link>
          <Nav.Link href="#">Progresso</Nav.Link>
          <Nav.Link href="#">Conta</Nav.Link>
          <Nav.Link href="#">LogOut</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default SidebarAdministrativo;