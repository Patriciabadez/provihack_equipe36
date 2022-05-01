import axios from "axios";
import { useEffect } from "react";
import { Nav, NavItem } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import { useData } from "../../hooks/useData";
import logo from "../../img/Ambibi_logo.png"
import { Avatar, Icon, Logo } from "./styles";
import Compras from "../../img/Compras.png";
import Configuracao from "../../img/Configuracao.png";
import Duvidas from "../../img/Duvidas.png";
import Privacidade from "../../img/Privacidade.png";
import Sair from "../../img/Sair.png";

export const DonationPage = () => {
  let location = useLocation();

  const [usuario, handleUsuario] = useData({})

  const navigation = [
    {
      title: "Voltar a comprar",
      href: "/starter",
      icon: Compras,
    },
    {
      title: "Configurações",
      href: "/",
      icon: Configuracao,
    },
    {
      title: "Segurança e Privacidade",
      href: "/",
      icon: Privacidade,
    },
    {
      title: "Dúvidas Frequentes",
      href: "/",
      icon: Duvidas,
    },
    {
      title: "Sair",
      href: "/",
      icon: Sair,
    },
  ];

  useEffect(() => {
    if(!localStorage.getItem('token')){
      // navigate('/',{replace:true});
    }
    if(localStorage.getItem('id')){
      let id = localStorage.getItem('id');
      let token = localStorage.getItem('token');
      console.log(token)
      axios.get(`${BASE_URL}usuario/id/${id}`,{
        headers: {
          'Authorization': token,
        }
      }).then(res => {
        console.log(res.data)
        handleUsuario(res.data);
      }).catch(err => {
        console.log(err)
      })
    }
  }, [])

  const onClickSair = () => {
      localStorage.removeItem('token');
      localStorage.removeItem('id');
  }

  return (
    <div className="flex-row">
      <div className="bg-light" style={{width: "20vw", position: "fixed", height: "100vh", color: "#081C15"}}>
        <div className="p-3">
          <Nav className="sidebarNav flex-column">
            <Logo src={logo} />
            <Avatar src={usuario.foto} />
            <h5 style={{textAlign: "center"}}>{usuario.nome}</h5>
            <p style={{textAlign: "center", marginBottom: "50px"}}>{usuario.compras?.length} compras feitas</p>
            {navigation.map((navi, index) => (
              <NavItem key={index} className="sidenav">
                <Link
                  to={navi.href}
                  style={{color: "#081C15"}}
                  className={
                    location.pathname === navi.href
                      ? "active nav-link"
                      : "nav-link"
                  }
                  onClick={navi.title === "Sair" && onClickSair}
                >
                  <Icon src={navi.icon}/>
                  <span className="d-inline-block" style={{marginLeft: "5px"}}>{navi.title}</span>
                </Link>
              </NavItem>
            ))}
          </Nav>
        </div>
      </div>
      
    </div>
  );
}