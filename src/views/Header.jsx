import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <Navbar bg="light" expand="xl" className='d-flex'>
            <Container>
                    <img src="../src/assets/img/pastel.png" alt="" className='ml-auto' />
                <Navbar.Brand as={Link} to='/' className='link'>Happy Cake</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to='/' className='link' >Inicio</Nav.Link>
                        <Nav.Link as={Link} to='/Contacto' className='link'>Contacto</Nav.Link>
                    </Nav>
                    <div className='img'>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;