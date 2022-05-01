import React from "react";
import { MDBCol, MDBContainer,MDBFooter } from "./styles";

export const FooterPage = () => {
  return (
   
    <MDBFooter className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        
          <MDBCol md="6">
            <h5 className="title">Sobre</h5>
            <p>Institucional</p>
            <p>Quem somos</p>
            <p>Fale conosco</p>
            <p>Sou uma Ong</p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Dúvidas</h5>
            <p>Como participar?</p>
            <p>Perguntas Frequêntes</p>
            <p>Politica de Privacidade</p>
            <p>Sou uma Ong</p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Siga nossas redes sociais</h5>
            <p>redes</p>
            <p>redes</p>
            <p>redes</p>
            <p>redes</p>
          </MDBCol>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
        </MDBContainer>
      </div>
    </MDBFooter>
    
  );
}

