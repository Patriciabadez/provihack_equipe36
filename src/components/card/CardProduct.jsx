import { StyleCardGroup, StyleCard } from './styles';

export const CardProduct = (props) => {
    return (
        <StyleCard style={{ width: 'calc((100% - 50px)/5)', margin:"5px" }}>
            <StyleCardGroup >
                <StyleCard.Img variant="top" src={props.item.logo} />
                <StyleCard.Body style={{display: 'flex', flexDirection: 'column', alignItems:'center'}}>
                    <StyleCard.Title style={{fontFamily:'Montserrat',fontSize: '18px',color: '#000000'}}>{props.item.nome}</StyleCard.Title>
                    <StyleCard.Text style={{color: '#12995A',fontSize: '12px',letterSpacing: '-0.01em' }}>
                        Você receberá {props.item.cashback}% de CashBack.
                    </StyleCard.Text>
                </StyleCard.Body>
            </StyleCardGroup>
   </StyleCard>
    )
}








