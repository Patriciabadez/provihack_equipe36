import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { CashContainer, ChildModalContainer, ComoFuciona, ContentContainer, Funciona, Icon, ImgContainer, InfosGrid, ModalContainer, Regras } from './styled';
import natura from "../../assets/logo/natura.png"
import reload from "../../assets/icons/reload.png"
import {BASE_URL} from "../../constants/urls"
import axios from "axios"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  width: '70vw',
  height: '90vh'
};

export default function NestedModal({ children, modalIsVisible, setmodalIsVisible, item }) {
  const handleOpen = () => setmodalIsVisible(true);
  const handleClose = () => setmodalIsVisible(false);

  const  comprar=()=>{
    let idUsuario=localStorage.getItem('id')
    let valor = (Math.random() * (500.0 - 0.0) + 0.0).toFixed(2)
    let token = localStorage.getItem('token')
    console.log(valor)

    axios
    .post(`${BASE_URL}compras/novo`,{"idParceiro":item.id,"idUsuario":idUsuario,"valor":valor},
    {
      headers:{
      'Authorization': token,
    }
  }
    
    )
    .then((res)=> console.log(res))
    .catch((err)=> console.log(err))
  }



  return (
    <div>
      <Modal
        style={{ backdropFilter: 'blur(10px)' }}
        open={modalIsVisible}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style }}>

          <ModalContainer>
            <ImgContainer>
              <img src={item.logo} />
            </ImgContainer>

            <ContentContainer>
              <h3>{item.nome}</h3>
              <CashContainer >
                <div style={{display:'flex'}}>
                <Icon>
                  <img src={reload} />
                </Icon>
                  <div
                   style={{color:' #10BA6B',fontSize:'30px',textAling:'center'}}>
                     {item.cashback}%
                     </div>
                     <div
                      style={{width:'200px',marginLeft:'20px'}}
                     >de cashback para o meio ambiente</div>
                  </div>
              </CashContainer>

              <Funciona>Como funciona o cashback</Funciona>
              <p>Receba cashback das suas compras online nas
                lojas parceiras e contribua para causas sociais .
                Ajudar o planeta começa com atitudes simples e práticas.</p>

              <div>



              <div>
              <Regras>
                  <p>Ver regras do cashback</p>
                
            
                  </Regras>
                  <input type="checkbox" />
                  Li e concordo com os termos e condições
               
                  </div>
              </div>


            </ContentContainer>

            <div>
            <Button
          onClick={comprar}
        style={{ backgroundColor: '#10BA6B', color: 'white', borderRadius: '5px', marginTop: '50px' }}
      >Ativar cashback e ir para a loja</Button>
            </div>
          </ModalContainer>

          {children}        
        </Box>
      </Modal>
    </div>
  );
}
