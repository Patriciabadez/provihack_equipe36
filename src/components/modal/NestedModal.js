import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { ChildModalContainer, ComoFuciona, ImgContainer, InfosGrid, ModalContainer } from './styled';
import natura from "../../assets/logo/natura.png"

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

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button
        style={{ backgroundColor: '#10BA6B', color: 'white', borderRadius: '5px', marginTop: '50px' }}
        onClick={handleOpen}>Ativar cashback e ir para a loja</Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, }}>

          <ChildModalContainer>

            <div>

              <ComoFuciona>
                <h4>Como funciona?</h4>
                <p>Veja como é simples ajudar quem precisa!</p>
              </ComoFuciona>

              <InfosGrid>
                <div>
                  <div>icon</div>
                  <h4>Ativar Cashback</h4>
                  <p>Clique em Ativar cashback e ir para loja e seja direcionado
                    para o site da loja participante.</p>
                </div>
                <div>
                  <div>icon</div>
                  <h4>Compre normalmente</h4>
                  <p>Assim que você for direcionado para a loja você poderá
                    comprar normalmente seus produtos favoritos com descontos incríveis.</p>
                </div>
                <div>
                  <div>icon</div>
                  <h4>Pronto!</h4>
                  <p>Após finalizar a compra, a loja nos avisará sobre o valor disponibilizado
                    e ele aparecerá dentro de alguns dias na sua Dashboard!</p>
                </div>
              </InfosGrid>
            </div>
            <h4>Regras e Exeções</h4>
            <div>
              <p>A empresa escolhida tem até 2 dia(s)
                para nos avisar da compra e o dinheiro aparecer no seu
                saldo como pendente (será confirmado em até 20 dias).</p>

              <p>Cashback válido apenas para compras online.</p>
              <p></p>

            </div>
            <div>

            </div>
          </ChildModalContainer>

          <Button onClick={handleClose}>Voltar</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function NestedModal({ children, modalIsVisible, setmodalIsVisible }) {
  const handleOpen = () => setmodalIsVisible(true);
  const handleClose = () => setmodalIsVisible(false);

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
              <img src={natura} />
            </ImgContainer>
            <div>
              <h3>Natura</h3>
              <div>
                <div>5,2%de cashback para o meio ambiente</div>
              </div>

              <p>Como funciona o cashback</p>
              <p>Receba cashback das suas compras online nas
                lojas parceiras e contribua para causas sociais .
                Ajudar o planeta começa com atitudes simples e práticas.</p>

              <div>
                <p>Ver regras do cashback</p>
                <div>
                  <input type="checkbox" />
                  Li e concordo com os termos e condições</div>
              </div>

            </div>
          </ModalContainer>

          {children}
          <ChildModal />
        </Box>
      </Modal>
    </div>
  );
}
