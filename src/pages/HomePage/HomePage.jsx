import { Carrossel } from "../../carrossel/Carrossel"
import { Container, RetornoCashback } from "./styles"

export const HomePage = () => {
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
            <div>
            </div>
            <RetornoCashback>
                <div>
                    <p>Maior Retorno de cashback da semana ou principais promoções</p>
                </div>
            </RetornoCashback>
            <div>
            <RetornoCashback>
                <div>
                    <p>texto</p>
                </div>
            </RetornoCashback>
            </div>
            <div>
            </div>
        </div>
    )

}