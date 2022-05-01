import Carousel from "react-bootstrap/Carousel"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Img } from "./styles";
import banner from "../assets/banner.png"

export const Carrossel = () => {
    return (
        <Container>
            <Carousel>
                <Carousel.Item>
                    <Img
                        className="d-block w-100"
                        src={banner}/>
                    <Carousel.Caption>
                       
                    </Carousel.Caption>
                </Carousel.Item>
                 <Carousel.Item>
                    <Img
                        className="d-block w-100"
                        src={banner} />
                    <Carousel.Caption>
                       
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            
        </Container>
    )
}