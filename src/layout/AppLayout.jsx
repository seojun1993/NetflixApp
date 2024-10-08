import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <div>
    <Navbar expand="lg">
      <Container fluid>
        <Navbar>
          <img height='60' src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA2MDNfMjc3%2FMDAxNzE3NDE4NDMyNjUz.me0OryZlVVy7cEAUWgHj3jmXkrS6sKH2dCXD_Z6VWDEg.jM2hkp2_jaCxw-2bdG40mlhWmexcKWhmiKFPqfCIBygg.PNG%2Fimage.png&type=sc960_832" alt="넷플릭스 로고" />
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/movies">Moives</Nav.Link>
          </Nav>
        </Navbar>
        <Navbar>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder=""
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" style={{ whiteSpace : 'nowrap'}}>검색</Button>
          </Form>
        </Navbar>
      </Container>
    </Navbar>

    <Outlet />
    </div>
  )
}

export default AppLayout
