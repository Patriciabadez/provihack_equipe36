import styled from "styled-components"


export const Container = styled.div`
p{
    margin:0px;
}
 div{
display: flex;
justify-content: center;
align-items: center;

 }

background-color:lightgreen;
`

export const MudancasClimaticasContainer=styled.div`
text-align:center;
h4{
    margin:50px 0px;
}
`
export const GridMudancasClimaticas=styled.div`
display:grid;
grid-template-columns:.3fr .3fr ;
grid-template-rows:1fr 1fr;
justify-content:center;
column-gap:2rem;
@media screen and (max-width: 550px) {
grid-template-columns:.8fr ;

}
`
export const Numbers=styled.p`
color:#DF8600;
font-weight: 600;
font-size:2.8em;
`

export const SobreNosContainer=styled.div`
background-color:gray;
display:flex;
height:300px;
p{
    margin:0px;
}
h4{
    margin:0px;
}
`

export const ContentContainer=styled.div`

`
export const CarbonoNeutro=styled.div`
height:300px;
margin-top:10px;
display:flex;
background-color:gray;
`
export const Parceiros=styled.div`
div{
    background-color:gray;
}
display:grid;
grid-template-columns:20vw 20vw 20vw;
grid-template-rows:12vw 12vw;
justify-content:center;
column-gap:15px;
row-gap:15px;
`
export const Arrecadacoes=styled.div`
font-size: 24px;
text-align: center;
background-color:#10BA6B;
color:#FFFFFF;
height:80px;
`
