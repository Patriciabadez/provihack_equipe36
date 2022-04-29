import { Carrossel } from "../../carrossel/Carrossel"
import {
    Arrecadacoes,
    CarbonoNeutro,
    Container,
    ContentContainer,
    GridMudancasClimaticas,
    MudancasClimaticasContainer,
    Numbers,
    Parceiros,
    SobreNosContainer
} from "./styles"

import bush from "../../assets/bush.png"
import people from "../../assets/people.png"
import garbage from "../../assets/garbage.png"
import gases from "../../assets/gases.png"


export const InitialPage = () => {

    return (
        <div>

            <Container>
                <Arrecadacoes>
                    <h4>
                        Nós já arrecadamos R$ 3.529.123,12 de CashBack para causas socioambientes
                    </h4>
                </Arrecadacoes>

            </Container>

            <Carrossel />

            <MudancasClimaticasContainer>
                <h4>Impactos Ambientais no Brasil</h4>
                <GridMudancasClimaticas>
                    <div>
                        <img src={garbage} />                        <Numbers>82.500.000</Numbers>
                        <p>Cerca de 82,5 milhões de toneladas de lixo doméstico produzidos no ano de 2021.</p>
                    </div>
                    <div>
                    <img src={gases} />   
                        <Numbers>1.524.954.161</Numbers>
                        <p>Cerca de 1.5 de bilhões de toneladas de emissão de gases de efeito estufa foram emitidos no Brasil.</p>
                    </div>
                    <div>
                    <img src={bush} />   
                        <Numbers>941,34 Km²</Numbers>
                        <p>Cerca de 941,34 km² foram desmatados no primeiro trimestre de 2022 na Amazônia Legal.</p>
                    </div>
                    <div>
                    <img src={people} />   
                        <Numbers>28.000.000</Numbers>
                        <p>Cerca de 28 milhões de pessoas ivem abaixo da linha da pobreza no Brasil</p>
                    </div>
                </GridMudancasClimaticas>
            </MudancasClimaticasContainer>

            <SobreNosContainer>
                <ContentContainer>
                    <h4>nosso propósito/oque fazemos</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </ContentContainer>

                <div>
                </div>
            </SobreNosContainer>


            <CarbonoNeutro>
                <div>
                </div>
                <div>carbono neutro/importância</div>
                <div>Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum has bee
                    n the industry's standard dummy text ever since the 1500s</div>
            </CarbonoNeutro>

            <div>
               <div></div>
                
            </div>

        </div>
    )

}