import Carousel from "react-bootstrap/Carousel"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Img } from "./styles";

export const Carrossel = () => {
    return (
        <Container>
            <Carousel>
                <Carousel.Item>
                    <Img
                        className="d-block w-100"
                        src="https://picsum.photos/1001/200" />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                 <Carousel.Item>
                    <Img
                        className="d-block w-100"
                        src="https://picsum.photos/1000/200" />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            
        </Container>
    )
}