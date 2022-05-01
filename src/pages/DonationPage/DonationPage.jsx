import axios from "axios";
import { useEffect } from "react";
import { Button, Nav, NavItem, ThemeProvider } from "react-bootstrap";
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
import { theme } from "../../constants/theme";

export const DonationPage = () => {
  let location = useLocation();
  let navigate = useNavigate();

  const [usuario, handleUsuario] = useData({})
  const [ongs, handleOngs] = useData([])

  const navigation = [
    {
      title: "Voltar a comprar",
      href: "/",
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
      getUsuario(id, token);

      axios.get(`${BASE_URL}ongs`).then(res => {
        handleOngs(res.data);
      })
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

  const onClickSair = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
  }

  const onClickDoarCashback = (idOng) => {
    let token = localStorage.getItem('token');
    let idUsuario = localStorage.getItem('id');

    axios.post(`${BASE_URL}doacao/novo`,{"idUsuario": idUsuario, "idOng": idOng}, {
      headers: {
        'Authorization': token,
      },
    }).then(res => {
      getUsuario(idUsuario, token);
    })
  }

  return (
    <ThemeProvider theme={theme}>
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

          <h3 style={{ marginLeft: "20px" }}>Escolha uma das ONG's abaixo</h3>

          {ongs?.map((ong) => (
            <div style={{display: "flex", width: "90%", marginLeft: "20px", backgroundColor: "#E8E8E8", padding: "10px", 
              borderRadius: "10px", marginTop: "10px", marginBottom:"10px" }}>
              <div style={{minHeight: "150px", minWidth: "200px", borderRadius: "10px 0 0 10px", 
                backgroundColor: "white", display:"flex", alignItems: "center", justifyContent: "center", marginRight: "10px"}}>
                <img style={{maxHeight: "140px", maxWidth: "190px"}} src={ong.logo} /> 
              </div>
              <div>
                <h5>{ong.nome}</h5>
                <span style={{color: "#707070"}}>#meio ambiente, #causas sociais</span>
                <p>{ong.descricao}</p>
                <div style={{textAlign: "end"}}>
                  <Button variant="primary" style={{backgroundColor: "#10BA6B", border: "none"}}
                  onClick={() => onClickDoarCashback(ong.id)}>
                    Doar Cashback
                  </Button>
                </div>
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </ThemeProvider>
  );
}