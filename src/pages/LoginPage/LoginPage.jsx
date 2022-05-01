import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, ThemeProvider } from "@material-ui/core"
import Visible from "../../img/Visible.png";
import VisibleOff from "../../img/VisibleOff.png"
import { useEffect, useState } from "react";
import { ErroDiv } from "../../hooks/styles";
import { useErro } from "../../hooks/useErro";
import { useForm } from "../../hooks/useForm";
import { Cadastro, Container, Icon, Img, LoginDiv, RSenha } from "./styles"
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { theme } from "../../constants/theme";
import { useLocation, useNavigate } from "react-router-dom";

export const LoginPage = () => {
  let location = useLocation();
  let navigate = useNavigate();
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [login, handleChange] = useForm({
    cpf: "",
    senha: ""
  });
  const [erro, handleErro] = useErro();

  useEffect(() => {
    if(localStorage.getItem('token')){
      navigate('/');
    }
  }, [])


  const handleClickShowPassword = () => {
    setMostrarSenha(!mostrarSenha);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onClickEntrar = () => {
    handleErro('');
    axios.post(`${BASE_URL}usuario/logar`, login).then(res => {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('id', res.data.id);
      navigate('/', {replace: true});
    }).catch(err => {
      handleErro("Ops! Ocorreu uma falha inesperada!");
    })
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Img />
        <LoginDiv>
          <h2>Você aqui de novo? :D</h2>
          <p>O planeta agradece o seu retorno, na Ambibí além de comprar com descontos, você ajuda em causas socio-ambientais.</p>
          <FormControl style={{ width: "75%" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-cpf">CPF</InputLabel>
            <OutlinedInput
              id="outlined-adornment-cpf"
              value={login.cpf}
              type="text"
              onChange={handleChange('cpf')}
              label="CPF"
            />
          </FormControl>
          <FormControl style={{ width: "75%", marginTop: "10px" }}
            variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={mostrarSenha ? 'text' : 'password'}
              login={login.senha}
              onChange={handleChange('senha')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {mostrarSenha ? <Icon src={VisibleOff}/> : <Icon src={Visible}/>}
                  </IconButton>
                </InputAdornment>
              }
              label="Senha"
            />
          </FormControl>
          <RSenha>
            <span style={{ color: "#707070" }}>Vixi, esqueceu sua senha?</span>
            <span style={{ color: "#10BA6B" }}><a>Recupere aqui!</a></span>
          </RSenha>
          {erro !== '' ? <ErroDiv>
            <p>{erro}</p>
          </ErroDiv> : null}
          <Button variant="contained" style={{ margin: "25px", backgroundColor: "#10BA6B", width: "75%", color: "white", padding: "15px", borderRadius: "10px" }}
            onClick={onClickEntrar}>
            Entrar
          </Button>
          <Cadastro>
            <span style={{ color: "#707070" }}>Ainda não tem uma conta?</span>
            <span style={{ color: "#10BA6B" }}><a>Cadastre-se</a></span>
          </Cadastro>
        </LoginDiv>
      </Container>
    </ThemeProvider>
  )
}