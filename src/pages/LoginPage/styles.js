import styled from "styled-components"
import background from "../../img/Rectangle83.png"

export const Container = styled.div`
  display:flex;
`

export const Img = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 50vw;
  height: 100vh;

  @media(max-width: 800px) {
    display: none
  }
`

export const LoginDiv = styled.div`
  width: 50vw;
  height: 100vh;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  
  h2{
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
  }
  
  p{
    text-align:center;
    width: 70%;
    color: #707070;
    margin-bottom: 50px;
  }

  @media(max-width: 800px) {
    width: 100vw;
  }
`

export const RSenha = styled.div`
  display:flex;
  font-size: 12px;
  justify-content: end;
  width: 75%;

  a{
    text-decoration: none;
    cursor:pointer;
  }
`

export const Cadastro = styled.div`
  display:flex;
  font-size: 12px;
  justify-content: center;
  width: 75%;

  a{
    text-decoration: none;
    cursor:pointer;
  }
`

export const Icon = styled.img`
  width: 15px;
`