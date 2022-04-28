import { Container } from "./styles"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export const Header = () => {

    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

            <Navbar.Brand  style={{marginLeft:'2%'}}  href="#home">logotipo</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav style={{marginLeft:'70%'}} className="me-auto">
                    <Nav.Link href="#features">comprar</Nav.Link>
                    <Nav.Link href="#pricing">carbono neutro</Nav.Link>
                    <Nav.Link href="#deets">sobre nós</Nav.Link>
                </Nav>

            </Navbar.Collapse>

        </Navbar>

    )
}