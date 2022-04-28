import { Carrossel } from "../../carrossel/Carrossel"
import { Container, ContentContainer, ImagesContainer, MudancasClimaticasContainer, SobreNosContainer } from "./styles"

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
                <h3>sobre mudanças climáticas</h3>
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

           {/*  <SobreNosContainer>
                <ContentContainer>
                    <p>nosso propósito/oque fazemos</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </ContentContainer>

                <ImagesContainer>
                    <div className="f"></div>
                    <div className="s"></div>
                </ImagesContainer> 

            </SobreNosContainer>
 */}
        </div>
    )

}