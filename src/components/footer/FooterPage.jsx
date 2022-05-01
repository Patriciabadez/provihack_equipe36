import React from "react";
import { IconsContainer, MDBCol, MDBContainer, MDBFooter } from "./styles";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

export const FooterPage = () => {
  return (

    <MDBFooter className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">

        <MDBCol md="6">
          <h5>Sobre</h5>
          <p>Institucional</p>
          <p>Quem somos</p>
          <p>Fale conosco</p>
          <p>Sou uma Ong</p>
        </MDBCol>
        <MDBCol md="6">
          <h5 >Dúvidas</h5>
          <p>Como participar?</p>
          <p>Perguntas Frequêntes</p>
          <p>Politica de Privacidade</p>
          <p>Sou uma Ong</p>
        </MDBCol>

        <IconsContainer>
          <h5>Siga nossas redes sociais</h5>
          <div>
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
            <YouTubeIcon />
          </div>
        </IconsContainer>

      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
        </MDBContainer>
      </div>

    </MDBFooter>

  );
}

