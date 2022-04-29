import { Carrossel } from "../../carrossel/Carrossel"
import {
    CarbonoNeutro,
    Container,
    ContentContainer,
    MudancasClimaticasContainer,
    Parceiros,
    SobreNosContainer
} from "./styles"

export const InitialPage = () => {

    return (
        <div>

            <Container>
                <div>
                    <p>
                        talvez mostrar a quantidade de cashbacks ja arrecadados
                    </p>
                </div>

            </Container> 

            <Carrossel /> 

            <MudancasClimaticasContainer>
                <div>sobre mudanças climáticas</div>
                <div>
                    <p>546515165,61515156</p>
                    <p>Números negativos de impactos ao meio ambiente</p>
                </div>
                <div>
                    <p>546515165,61515156</p>
                    <p>Números negativos de impactos ao meio ambiente</p>
                </div>
                <div>
                    <p>546515165,61515156</p>
                    <p>Números negativos de impactos ao meio ambiente</p>
                </div>
                <div>
                    <p>546515165,61515156</p>
                    <p>Números negativos de impactos ao meio ambiente</p>
                </div>
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
       <h4>parceiro ou lojas vinculadas a nós</h4>
            <Parceiros>
            
                <div>s</div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </Parceiros>
            </div> 
        
        </div>
    )

}