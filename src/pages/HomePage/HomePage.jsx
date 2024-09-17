import React from 'react';
import { Navbar, Nav, Button, Container, Row, Col, Card } from 'react-bootstrap';

const HomePage = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Sistema Karapinha XPTO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#conta">Conta</Nav.Link>
            <Nav.Link href="#servicos">Serviços</Nav.Link>
            <Nav.Link href="#marcacoes">Marcações</Nav.Link>
          </Nav>
          <Button variant="outline-danger">Logout</Button>
        </Navbar.Collapse>
      </Navbar>

      {/* Section com Fotografia e Texto */}
      <section className="py-5">
        <Container>
          <Row>
            <Col md={6}>
              <img src="caminho/para/imagem.jpg" alt="Fotografia" className="img-fluid" />
            </Col>
            <Col md={6}>
              <h2>Texto da seção</h2>
              <p>
                Aqui vai o texto que descreve o conteúdo da seção. Você pode modificar e estilizar conforme necessário.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Div com 3 Cards */}
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Card 1</Card.Title>
                <Card.Text>
                  Conteúdo do card 1.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Card 2</Card.Title>
                <Card.Text>
                  Conteúdo do card 2.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Card 3</Card.Title>
                <Card.Text>
                  Conteúdo do card 3.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
