import { Carrossel } from "../../carrossel/Carrossel"
import rectangle1 from "../../assets/rectangle1.png"
import rectangle2 from "../../assets/rectangle2.png"

import {
    AcaoSocialContainer,
    Arrecadacoes,
    CarbonoNeutro,
    CarbonoNeutroContainer,
    CarbonoNeutroEAcaoSocial,
    ConsumoConscienteContainer,
    Container,
    Content,
    ContentContainer,
    DivVerde,
    GridMudancasClimaticas,
    Icon,
    Infos,
    MudancaDoMundoContainer,
    MudancasClimaticasContainer,
    Numbers,
    OngApoiamos,
    PageContainer,
    Parceiros,
    PrincipaisParceiros,
    PrincipaisParceirosContainer,
    ResolverProblemas,
    SobreNosContainer,
    Title
} from "./styles"



import { Header } from "../../components/header/Header"
import { FooterPage } from "../../components/footer/FooterPage"

export const InitialPage = () => {

    const importImage = (path, image) => {
        return (
            <img src={require(`../../assets/${path}/${image}.png`)} />
        )
    }

    return (
        <div>
            <PageContainer>
                <Header />
                <Container>
                    <Arrecadacoes>
                        <h2>
                            Nós já arrecadamos R$ 3.529.123,12 de CashBack para causas socioambientes
                        </h2>
                    </Arrecadacoes>

                </Container>

                <Carrossel />

                <MudancasClimaticasContainer>
                    <h3>Impactos Ambientais no Brasil</h3>
                    <GridMudancasClimaticas>
                        <div>
                            {importImage('icons', 'garbage')}
                            <Numbers>82.500.000</Numbers>
                            <p>Cerca de 82,5 milhões de toneladas de lixo doméstico produzidos no ano de 2021.</p>
                        </div>
                        <div>
                            {importImage('icons', 'gases')}
                            <Numbers>1.524.954.161</Numbers>
                            <p>Cerca de 1.5 de bilhões de toneladas de emissão de gases de efeito estufa foram emitidos no Brasil.</p>
                        </div>
                        <div>
                            {importImage('icons', 'bush')}
                            <Numbers>941,34 Km²</Numbers>
                            <p>Cerca de 941,34 km² foram desmatados no primeiro trimestre de 2022 na Amazônia Legal.</p>
                        </div>
                        <div>
                            {importImage('icons', 'people')}
                            <Numbers>28.000.000</Numbers>
                            <p>Cerca de 28 milhões de pessoas ivem abaixo da linha da pobreza no Brasil</p>
                        </div>
                    </GridMudancasClimaticas>
                </MudancasClimaticasContainer>

                <ResolverProblemas>
                    <div className="resolver-problemas">
                    <a name="sobre"></a>
                        <div className="container">
                            
                            <h4>Como ajudamos a resolver esses problemas?  </h4>
                            <p>Existimos para conectar pessoas, empresas e ONGs
                                que se preocupam com causas ambientais
                                e buscam minimizar os impactos causados.</p>
                            <Icon>
                                {importImage('icons', 'cart')}
                                <p>Compre de empresas que se preocupam em contribuir para uma indústria mais limpa;</p>
                            </Icon>
                            <Icon>
                                {importImage('icons', 'cashback')}
                                <p>Receba Cashback das compras realizadas através dessas empresas;</p>
                            </Icon>
                            <Icon>
                                {importImage('icons', 'heart')}
                                <p>O Cashback arrecado é doado para ONGs que pensam em deixar um mundo mais igualitário.</p>
                            </Icon>
                        </div>
                    </div>
                    <div className="fotoverde">

                        <img src={rectangle2} className="foto" />
                        <div className="verde"></div>
                    </div>
                    <div
                        className="fotoverde"
                        style={{
                            display: "grid",
                            gridTemplateColumns: "6vw 22vw",
                            gridTemplateRows: '20vw',
                            columnGap: '20px'
                        }}

                    >
                        <div className="verde"></div>
                        <img src={rectangle1} className="foto" />

                    </div>
                </ResolverProblemas >

                <Infos>
                    <CarbonoNeutroEAcaoSocial>
                        <CarbonoNeutroContainer>
                            <div>
                                <h4>Carbono Neutro</h4>
                                <p>O carbono zero é uma balança ecológica, a medida que a empresa
                                    libera do seu processo produtivo, gases que contribuem para o
                                    efeito estufa esse desequilibro é compensado neutralizando outras
                                    partes presentes na atmosfera. É uma forma de
                                    minimizar os impactos ambientais causados no processo de
                                    produção produto/serviço.</p>
                            </div>
                        </CarbonoNeutroContainer>

                        <AcaoSocialContainer>

                            <div>
                            <a name="acoes"></a>
                                <h4>Ação Social</h4>
                                <p>Participar de projetos sociais nos ajuda a ampliar a nossa visão de mundo,
                                    nos ajudando a perceber as diferentes perspectivas de vida existentes,
                                    nos torna mais humanos e contribuindo para um mundo melhor,
                                    afinal, não existe Planeta B.</p>
                            </div>
                        </AcaoSocialContainer>
                    </CarbonoNeutroEAcaoSocial>

                    <ConsumoConscienteContainer>

                        <DivVerde></DivVerde>

                        <Content>
                            <div>
                                <h4>Consumo consciente</h4>
                                <p>O consumo consciente não é sobre deixar de comprar e sim repensar quais são as consequências positivas e negativas de tudo aquilo que consumimos. A forma que consumimos afeta a todos!</p>
                                <p>  Vamos refletir sobre os nossos hábitos de consumo?</p>
                            </div>
                        </Content>

                        <DivVerde></DivVerde>

                    </ConsumoConscienteContainer>
                </Infos>

                <PrincipaisParceirosContainer>
                <a name="parceiros"></a>
                    <h3> Principais lojas parceiras</h3>
                    <PrincipaisParceiros>

                        <div>{importImage('logo', 'positiva')}</div>
                        <div>{importImage('logo', 'ecological')}</div>
                        <div>{importImage('logo', 'hering')}</div>
                        <div>{importImage('logo', 'natura')}</div>
                    </PrincipaisParceiros>
                </PrincipaisParceirosContainer>

                <PrincipaisParceirosContainer>
                <a name="ong"></a>
                    <h3>ONG que apoiamos</h3>
                    <PrincipaisParceiros>
                        <div>{importImage('logo', 'projetocoracao')}</div>
                        <div>{importImage('logo', 'sonhar')}</div>
                        <div>{importImage('logo', 'dedoverde')}</div>
                        <div>{importImage('logo', 'instituto')}</div>
                    </PrincipaisParceiros>
                </PrincipaisParceirosContainer>

                <MudancaDoMundoContainer>
                    <div>

                        <Title>Você empresa, quer participar da mudança do mundo?</Title>

                        <p>A Ambibí conecta pessoas que comprar de empresas que se importa com questões ambientais.</p>
                        <p>Faça parte da nossa plataforma e anuncie seu produto!</p>

                        <button>Quero fazer parte</button>

                    </div>
                </MudancaDoMundoContainer>


            </PageContainer>
            <FooterPage />
        </div>
    )

}