import { useEffect } from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Button, ButtonGroup, Form, FormControl } from "react-bootstrap"
import logo from "../../assets/logo.png"
import Lupa from "../../img/Lupa.png"
import { ButtonContainer, Logo } from '../header/styles'
import { useData } from '../../hooks/useData';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../constants/urls';
import { DadosUsuario } from "./styles";
import axios from "axios";

export const HeaderCompras = () => {
    let location = useLocation();
    let navigate = useNavigate();

    const [usuario, handleUsuario] = useData({});
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/', { replace: true });
        }
        if (localStorage.getItem('id')) {
            let id = localStorage.getItem('id');
            let token = localStorage.getItem('token');
            getUsuario(id, token);          
        }
    }, [])

    const getUsuario = (id, token) => {
        axios.get(`${BASE_URL}usuario/id/${id}`, {
            headers: {
                'Authorization': token,
            }
        }).then(res => {
            handleUsuario(res.data);
        }).catch(err => {
        })
    }

    const onClickDoar = () => {
        navigate("/doar")
    }
    return (

        <Navbar collapseOnSelect expand="sm" bg="white" >

            <Logo src={logo} />
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav style={{ margin: 'auto' }} className="me-auto">
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Pesquisar por marcas ou lojas"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="ligth">
                            <img src={Lupa} />
                        </Button >
                    </Form>
                </Nav>
                <DadosUsuario>
                    <div>
                        Seu saldo:
                        {usuario?.totalCashback?.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                    </div>
                    <Button variant="success" onClick={onClickDoar}>
                        doar
                    </Button>
                    <img src={usuario?.foto} />
                </DadosUsuario>
            </Navbar.Collapse>

        </Navbar>

    )
}