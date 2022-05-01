import { Carrossel } from "../../carrossel/Carrossel"
import { CardProduct } from "../../components/card/CardProduct";
import { Container, Cashbacks } from "./styles"
import { FooterPage } from '../../components/footer/FooterPage';
import {HeaderCompras } from '../../components/headerCompras/HeaderCompras';
import { useData } from "../../hooks/useData";
import { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";

export const HomePage = () => {

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
                <div style={{display: "flex", margin: "0 60px"}}>
                  {maioresCashbacks?.map(item => (
                    <CardProduct item={item}/>
                  ))}
                </div>
            </div>
            <div>
                <div>
                    <Cashbacks>Os queridinhos dos consumidores</Cashbacks>
                </div>
                <div style={{display: "flex", margin: "0 60px"}}>
                  {queridinhosSemana?.map(item => (
                    <CardProduct item={item}/>
                  ))}
                </div>
            </div>
            <div>
                <div>
                    <Cashbacks>Compra sustentável</Cashbacks>
                </div>
                <div style={{display: "flex", margin: "0 60px"}}>
                  {sustentavel?.map(item => (
                    <CardProduct item={item}/>
                  ))}
                </div>
            </div>
            <div>
            </div>
            <FooterPage />
        </div>
    )
}