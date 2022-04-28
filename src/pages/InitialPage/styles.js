import styled from "styled-components"


export const Container = styled.div`
p{
    margin:0px;
}
 div{
display: flex;
justify-content: center;
align-items: center;
height:40px;
 }

background-color:gray;
`

export const MudancasClimaticasContainer=styled.div`
display:grid;
grid-template-columns:1fr 1fr ;
grid-template-rows:100px 100px ;
text-align:center;

h3{
   margin-top:15px;
    grid-column:1/3;

}
`

export const SobreNosContainer=styled.div`
height:350px;
background-color:gray;
first-child {
        color:red;
    }
`
export const ImagesContainer=styled.div`
position:relative;
background-color:gray;
height:500px;

.f{
    background-color:red;
    height:200px;
    width:200px;
    top:13vw;
    left:1070px;
    position:absolute;
}
.s{
    background-color:blue;
    height:200px;
    width:200px;
    top:-12vw;
    left:1070px;
    position:absolute;
}
`
export const ContentContainer=styled.div`
width:500px;
background-color:yellow;
`