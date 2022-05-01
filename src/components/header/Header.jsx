import { ButtonContainer, Logo } from "./styles"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import logo from "../../assets/logo.png"

export const Header = () => {

    return (

        <Navbar collapseOnSelect expand="sm" bg="white" >

            <Logo src={logo} />
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">

                <Nav style={{ margin: 'auto' }} className="me-auto">

                    <Nav.Link style={{ color: "#081C15", margin: 'auto' }}>comprar</Nav.Link>
                    <Nav.Link style={{ color: "#081C15", margin: 'auto' }} >carbono neutro</Nav.Link>
                    <Nav.Link style={{ color: "#081C15", margin: 'auto' }} >sobre nós</Nav.Link>

                </Nav>
                <ButtonContainer>
                    <Button style={{ color: "#707070" }} variant="light">Entrar</Button>
                    <Button variant="success">Cadastrar-se</Button>
                </ButtonContainer>

            </Navbar.Collapse>

        </Navbar>

    )
}