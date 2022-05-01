import { Carrossel } from "../../carrossel/Carrossel"
import { CardProduct } from "../../components/card/CardProduct";
import Slick from "../../components/slider/Slick"
import { Container, Cashbacks } from "./styles"
import { FooterPage } from '../../components/footer/FooterPage';
import { HeaderCompras } from '../../components/headerCompras/HeaderCompras';

import ModalComponent from "../../components/modal/NestedModal";

export const HomePage = () => {

    return (
        <div>
            <HeaderCompras />
            <Container>
                <div>
                    <p>
                        Nós já arrecadamos R$ 3.529.123,12 de CachBack para causas socioambientais.
                    </p>
                </div>
            </Container>
            <Carrossel />
            <div>
            </div>
            <div>
                <div>
                    <Cashbacks>Os maiores cashbacks da semana</Cashbacks>
                </div>
                <Slick />
                <div />
            </div>
            <div>
                <div>
                    <Cashbacks>Os queridinhos dos consumidores</Cashbacks>
                </div>
                <Slick/>
            </div>
            <div>
                <div>
                    <Cashbacks>Compra sustentável</Cashbacks>
                </div>
                <Slick />
            </div>
            <div>
            </div>       
            <FooterPage />
        </div>
    )

}