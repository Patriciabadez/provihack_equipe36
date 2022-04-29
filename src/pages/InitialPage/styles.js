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

display:grid;
grid-template-columns:1fr 1fr ;
grid-template-rows:.5fr 1fr 1fr ;
text-align:center;

h3{
    grid-column:1/3;
    margin:0px;
}
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