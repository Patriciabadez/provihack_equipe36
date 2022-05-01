import { BotãoPesquisar, Container } from "./styles"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Button, Form, FormControl } from "react-bootstrap"

export const HeaderCompras = () => {

    return (

        <Navbar collapseOnSelect expand="lg" bg="ligth" variant="ligth">

            <Navbar.Brand style={{ marginLeft: '2%' }} href="#home">logotipo</Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav style={{ marginLeft: '70%' }} className="me-auto">
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Pesquisar por marcas ou lojas"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Nav>

            </Navbar.Collapse>

        </Navbar>

        // <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

        //     <Navbar.Brand  style={{marginLeft:'2%'}}  href="#home">logotipo</Navbar.Brand>
        //     <img src='./img/Ambibi_logo.png'/>
        //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        //     <Navbar.Collapse id="responsive-navbar-nav">
        //         <Nav style={{marginLeft:'70%'}} className="me-auto">

        //             <Nav.Link href="#features">comprar</Nav.Link>
        //             <Nav.Link href="#pricing">carbono neutro</Nav.Link>
        //             <Nav.Link href="#deets">sobre nós</Nav.Link>
        //         </Nav>

        //     </Navbar.Collapse>

        // </Navbar>

    )
}