import { ButtonContainer, Logo } from "./styles"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import logo from "../../assets/logo.png"
import { useLocation, useNavigate } from "react-router-dom"
import { useData } from "../../hooks/useData";
import { useEffect } from "react"

export const Header = () => {
    let location = useLocation();
    let navigate = useNavigate();

    const [usuarioLogado, handleUsuarioLogado] = useData(false)

    useEffect(() => {
        if (localStorage.getItem('token')) {
            handleUsuarioLogado(true);
        } else {
            handleUsuarioLogado(false);
        }
      }, [])

    const onClickEntrar = () => {
        navigate('/login');
    }

    const onClickPerfil = () => {
        navigate('/dashboard');
    }

    const onClickComprar = () => {
        navigate('/compras');
    }

    return (

        <Navbar collapseOnSelect expand="sm" bg="white" >

            <Logo src={logo} />
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">

                <Nav style={{ margin: 'auto' }} className="me-auto">

                    <Nav.Link style={{ color: "#081C15", margin: 'auto' }}>Ações</Nav.Link>
                    <Nav.Link style={{ color: "#081C15", margin: 'auto' }}>Parceiros</Nav.Link>
                    <Nav.Link style={{ color: "#081C15", margin: 'auto' }}>Ongs apoiadas</Nav.Link>
                    <Nav.Link style={{ color: "#081C15", margin: 'auto' }}>Sobre Nós</Nav.Link>

                </Nav>

                {usuarioLogado ? 
                    <ButtonContainer>
                        <Button style={{ color: "#707070" }} variant="light" onClick={onClickPerfil}>Meu Perfil</Button>
                        <Button variant="success" onClick={onClickComprar}>Ir para as compras</Button>
                    </ButtonContainer>
                    :
                    <ButtonContainer>
                        <Button style={{ color: "#707070" }} variant="light" onClick={onClickEntrar}>Entrar</Button>
                        <Button variant="success">Cadastrar-se</Button>
                    </ButtonContainer>
                }

            </Navbar.Collapse>

        </Navbar>

    )
}