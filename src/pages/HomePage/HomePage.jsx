import { Carrossel } from "../../carrossel/Carrossel"
import { CardProduct } from "../../components/card/CardProduct";
import Slick from "../../components/slider/Slick"
import { Container, Cashbacks } from "./styles"
import { FooterPage } from '../../components/footer/FooterPage';
import {HeaderCompras } from '../../components/headerCompras/HeaderCompras';
import { useData } from "../../hooks/useData";
import { useEffect } from "react";
import  axios  from 'axios';
import { BASE_URL } from "../../constants/urls";
import { StyleCard,StyleCardGroup } from '../../components/card/styles';
import Slider from "react-slick";

export const HomePage = () => {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
    const [parceiros, handleParceiros]=useData([]);
    const [maioresCashbacks, handleMaioresCashBacks] = useData([])
    const [queridinhosSemana, handleQueridinhosSemana] = useData([])
    const [sustentavel, handleSustentavel] = useData([])

    useEffect(() => {
        if (localStorage.getItem('id')) {
            let id = localStorage.getItem('id');
            let token = localStorage.getItem('token');
            getParceiros('topCashBack', handleMaioresCashBacks);
            getParceiros('queridinho', handleQueridinhosSemana);
            getParceiros('sustentavel', handleSustentavel);
            // getAllParceiros();
        }
    }, [])

    const getParceiros = (categoria, handle) => {
        axios.get(`${BASE_URL}parceiros/categoria/${categoria}`).then(res => {
             handle(res.data);                   
        })
    }
    const getAllParceiros = () => {
        axios.get(`${BASE_URL}parceiros`).then(res => {
            //  handle(res.data);                   
        })
    }

    return (
        <div>
            <HeaderCompras/>
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
                {maioresCashbacks?.map(item =>(
                    <Slider {...settings}>
                    <StyleCard style={{ width: '18rem' }}>
                    <StyleCardGroup >
                        <StyleCard.Img variant="top" src={item.logo} />
                        <StyleCard.Body style={{display: 'flex', flexDirection: 'column', alignItems:'center'}}>
                            <StyleCard.Title style={{fontFamily:'Montserrat',fontSize: '18px',color: '#000000'}}>{item.nome}</StyleCard.Title>
                            <StyleCard.Text style={{color: '#12995A',fontSize: '12px',letterSpacing: '-0.01em' }}>
                                Você receberá {item.cashbacks} de CashBack.
                            </StyleCard.Text>
                        </StyleCard.Body>
                    </StyleCardGroup>
           </StyleCard>
           </Slider>
                ))}
                <div/>
            </div>
            <div>
                <div>
                    <Cashbacks>Os queridinhos dos consumidores</Cashbacks>
                </div>
                {queridinhosSemana?.map(item =>(
                    <Slider {...settings}>
                    <StyleCard style={{ width: '18rem' }}>
                    <StyleCardGroup >
                        <StyleCard.Img variant="top" src={item.logo} />
                        <StyleCard.Body style={{display: 'flex', flexDirection: 'column', alignItems:'center'}}>
                            <StyleCard.Title style={{fontFamily:'Montserrat',fontSize: '18px',color: '#000000'}}>{item.nome}</StyleCard.Title>
                            <StyleCard.Text style={{color: '#12995A',fontSize: '12px',letterSpacing: '-0.01em' }}>
                                Você receberá {item.cashbacks} de CashBack.
                            </StyleCard.Text>
                        </StyleCard.Body>
                    </StyleCardGroup>
           </StyleCard>
           </Slider>
                ))}
            </div>
            <div>
                <div>
                    <Cashbacks>Compra sustentável</Cashbacks>
                </div>
                {sustentavel?.map(item =>(
                    <Slider {...settings}>
                    <StyleCard style={{ width: '18rem' }}>
                    <StyleCardGroup >
                        <StyleCard.Img variant="top" src={item.logo} />
                        <StyleCard.Body style={{display: 'flex', flexDirection: 'column', alignItems:'center'}}>
                            <StyleCard.Title style={{fontFamily:'Montserrat',fontSize: '18px',color: '#000000'}}>{item.nome}</StyleCard.Title>
                            <StyleCard.Text style={{color: '#12995A',fontSize: '12px',letterSpacing: '-0.01em' }}>
                                Você receberá {item.cashbacks} de CashBack.
                            </StyleCard.Text>
                        </StyleCard.Body>
                    </StyleCardGroup>
           </StyleCard>
           </Slider>
                ))}
            </div>
            <div>
            </div>
            <FooterPage />
        </div>
    )

}