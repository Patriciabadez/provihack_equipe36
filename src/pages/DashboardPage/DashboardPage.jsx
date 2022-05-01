import axios from "axios";
import { useEffect } from "react";
import { Nav, NavItem, Table } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
  let navigate = useNavigate();

  const [usuario, handleUsuario] = useData({})

  const navigation = [
    {
      title: "Voltar a comprar",
      href: "/compras",
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
      navigate('/');
    }
    if (localStorage.getItem('id')) {
      let id = localStorage.getItem('id');
      let token = localStorage.getItem('token');
      axios.get(`${BASE_URL}usuario/id/${id}`, {
        headers: {
          'Authorization': token,
        }
      }).then(res => {
        handleUsuario(res.data);
      }).catch(err => {
      })
    }
  }, [])

  const onClickSair = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
  }

  const onClickDoar = () => {
    navigate('/doar');
  }

  return (
    <div className="flex-row">
      <div className="bg-light" style={{ width: "20vw", position: "fixed", height: "100vh", color: "#081C15", boxShadow: "5px 0px 5px 1px #E5E5E5" }}>
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

      <div style={{ width: "80vw", minHeight: "100vh", marginLeft: "20vw" }}>
        <div style={{ display: "flex", alignItems: "center", paddingTop: "30px", paddingBottom: " 30px" }}>
          <div style={{ width: "35%", textAlign: "center" }}>
            <p style={{ marginBottom: "0" }}>
              Seu saldo de Cashback
            </p>
            <p style={{ fontSize: "30px", fontWeight: "bold" }}>
              {usuario?.totalCashback?.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
            </p>
          </div>
          <div style={{ width: "40%" }}>
            <ul style={{ color: "#707070" }}>
              <li>O seu saldo disponível é um acumulo de cashbacks obtidos pelas compras realizadas</li>
              <li>O seu saldo disponível poderá ser doado para ONGs selecionadas pela Ambibí</li>
            </ul>
          </div>
        </div>
        <div style={{ display: "flex", marginLeft: "5px", marginRight: "5px" }}>
          <img style={{
            marginLeft: "3px", marginRight: "3px", width: "calc((100% - 28px)/3)",
            borderRadius: "5%", cursor: "pointer"
          }} onClick={onClickDoar} src={Doar} />
          <img style={{
            marginLeft: "3px", marginRight: "3px", width: "calc((100% - 28px)/3)",
            borderRadius: "5%", cursor: "pointer"
          }} src={ContribuirPix} />
          <img style={{
            marginLeft: "3px", marginRight: "3px", width: "calc((100% - 28px)/3)",
            borderRadius: "5%", cursor: "pointer"
          }} src={Painel} />
        </div>
        <div style={{margin: "5px"}}>
          <h5 style={{ marginTop: "30px" }}>Histórico de Cashbacks</h5>
          <Table responsive striped>
            <thead>
              <tr>
                <th>Data da Compra</th>
                <th>Loja</th>
                <th>Valor da Compra</th>
                <th>Cashback</th>
              </tr>
            </thead>
            <tbody>
              {usuario?.compras?.map((compra) => (
                <tr>
                  <td>{compra.data.substring(8,10)}/{compra.data.substring(5,7)}/{compra.data.substring(0,4)}</td>
                  <td>{compra.parceiro.nome}</td>
                  <td>{compra.valorCompra.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</td>
                  <td>{compra.valorCashback.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>

    </div>
  );
}