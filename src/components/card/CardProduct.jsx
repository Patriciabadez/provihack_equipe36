import { StyleCardGroup, StyleCard } from './styles';

export const CardProduct = () => {
    return (
        <StyleCard style={{ width: '18rem' }}>
            <StyleCardGroup >
                <StyleCard.Img variant="top" src="https://picsum.photos/100/100" />
                <StyleCard.Body style={{display: 'flex', flexDirection: 'column', alignItems:'center'}}>
                    <StyleCard.Title style={{fontFamily:'Montserrat',fontSize: '18px',color: '#000000'}}>Natura</StyleCard.Title>
                    <StyleCard.Text style={{color: '#12995A',fontSize: '12px',letterSpacing: '-0.01em' }}>
                        Você receberá 3,5% de CashBack.
                    </StyleCard.Text>
                </StyleCard.Body>
            </StyleCardGroup>
   </StyleCard>
    )
}










