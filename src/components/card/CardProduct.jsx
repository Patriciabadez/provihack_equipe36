import { StyleCardGroup, StyleCard } from './styles';
import { useState } from "react";
import ModalComponent from '../modal/NestedModal';
import NestedModal from '../modal/NestedModal';

export const CardProduct = (props) => {
    return (
        <StyleCard style={{ width: '446px', height: "476px", margin:"5px", flexShrink:"0" }}>
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








