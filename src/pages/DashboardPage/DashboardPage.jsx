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
import Doar from "../../img/Doar.png";
import ContribuirPix from "../../img/ContribuirPix.png";
import Painel from "../../img/Painel.png";

export const DashboardPage = () => {
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
    if (!localStorage.getItem('token')) {
      // navigate('/',{replace:true});
    }
    if (localStorage.getItem('id')) {
      let id = localStorage.getItem('id');
      let token = localStorage.getItem('token');
      console.log(token)
      axios.get(`${BASE_URL}usuario/id/${id}`, {
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
      <div className="bg-light" style={{ width: "20vw", position: "fixed", height: "100vh", color: "#081C15", backgroundColor: "#FFFFFF" }}>
        <div className="p-3">
          <Nav className="sidebarNav flex-column">
            <Logo src={logo} />
            <Avatar src={usuario.foto} />
            <h5 style={{ textAlign: "center" }}>{usuario.nome}</h5>
            <p style={{ textAlign: "center", marginBottom: "50px" }}>{usuario.compras?.length} compras feitas</p>
            {navigation.map((navi, index) => (
              <NavItem key={index} className="sidenav">
                <Link
                  to={navi.href}
                  style={{ color: "#081C15" }}
                  className={
                    location.pathname === navi.href
                      ? "active nav-link"
                      : "nav-link"
                  }
                  onClick={navi.title === "Sair" && onClickSair}
                >
                  <Icon src={navi.icon} />
                  <span className="d-inline-block" style={{ marginLeft: "5px" }}>{navi.title}</span>
                </Link>
              </NavItem>
            ))}
          </Nav>
        </div>
      </div>

      <div style={{ width: "80vw", backgroundColor: "#E5E5E5", minHeight: "100vh", marginLeft: "20vw" }}>
        <div style={{ display: "flex", alignItems: "center", paddingTop: "30px", paddingBottom:" 30px"}}>
          <div style={{ width: "35%", textAlign: "center" }}>
            <p style={{ marginBottom: "0" }}>
              Seu saldo de Cashback
            </p>
            <p style={{ fontSize: "30px", fontWeight: "bold" }}>
              {usuario?.totalCashback?.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
            </p>
          </div>
          <div style={{width: "40%"}}>
            <ul style={{color: "#707070"}}>
              <li>O seu saldo disponível é um acumulo de cashbacks obtidos pelas compras realizadas</li>
              <li>O seu saldo disponível poderá ser doado para ONGs selecionadas pela Ambibí</li>
            </ul>
          </div>
        </div>
        <div style={{display: "flex", marginLeft: "5px", marginRight: "5px"}}>
          <img style={{marginLeft: "3px", marginRight: "3px", width: "calc((100% - 28px)/3)",
            borderRadius: "5%", cursor: "pointer"}} src={Doar} />
          <img style={{marginLeft: "3px", marginRight: "3px", width: "calc((100% - 28px)/3)",
            borderRadius: "5%", cursor: "pointer"}} src={ContribuirPix} />
          <img style={{marginLeft: "3px", marginRight: "3px", width: "calc((100% - 28px)/3)",
            borderRadius: "5%", cursor: "pointer"}} src={Painel} />
        </div>
      </div>

    </div>
  );
}