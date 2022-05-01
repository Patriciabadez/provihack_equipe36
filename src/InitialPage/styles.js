import styled from "styled-components"

export const PageContainer=styled.div`
p{
  font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 26px;
}
h3{
   margin:80px 0px 30px 0px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
}
h4{
   margin:80px 0px 30px 0px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
}
`
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

export const MudancasClimaticasContainer = styled.div`
text-align:center;
h4{
    margin:50px 0px;
}
`
export const GridMudancasClimaticas = styled.div`
display:grid;
grid-template-columns:.3fr .3fr ;
grid-template-rows:1fr 1fr;
justify-content:center;
column-gap:2rem;
@media screen and (max-width: 550px) {
grid-template-columns:.8fr ;
}
`
export const Numbers = styled.p`
color:#DF8600;
font-weight: 600;
font-size:2.8em;
`

export const SobreNosContainer = styled.div`
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

export const ContentContainer = styled.div`

`
export const CarbonoNeutro = styled.div`
height:300px;
margin-top:10px;
display:flex;
background-color:gray;
`
export const Parceiros = styled.div`
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
export const Arrecadacoes = styled.div`
font-size: 24px;
text-align: center;
background-color:#10BA6B;
color:#FFFFFF;
height:80px;
`
export const ResolverProblemas = styled.div`
display:grid;
width:90vw;
grid-template-columns: 60vw 5vw;
grid-template-rows:300px;

@media screen and (max-width:1000px) {
display:grid;
width:90vw;
grid-template-columns: 105vw  100px;
grid-template-rows:900px;
}
h4{
  text-align:center;
 margin:5vw;
 font-size:2rem;

}
.container{
  width:50vw;
}

.resolver-problemas{
  grid-row: 1 / 3;
  background-color:#068147;
  margin-right:20px;
  color:#FFFFFF;


}

  .fotoverde {
    width:30vw;
    display: grid;
    grid-template-columns:22vw 2vw;
    grid-template-rows:20vw;
    column-gap: 20px;
  }

  .foto {
    width:100%;
    height:100%;

  }

  .verde {
    width: 6vw;
    height: 100%;
    background-color: #10BA6B;
  }

`;

export const Icon = styled.div`
display:flex;
img{
  width:20px;
  margin-top:5px;
  margin-right:25px;
  height:20px;

}

`
export const Infos = styled.div`
display:grid;
width:80vw;
margin:40px auto auto auto;
grid-template-rows:300px 400px;
h3{
  margin-top:40px;
}


`
export const CarbonoNeutroEAcaoSocial = styled.div`
  display:grid;
  grid-template-columns:39vw 39vw;
  column-gap:3vw;
`
export const CarbonoNeutroContainer = styled.div`
 div{
    width:400px;
    margin:auto;
  }
   background-color:#068147;
   color:#FFFFFF;
  text-align:center;

`
export const AcaoSocialContainer = styled.div`
  background-color:#068147;
  color:#FFFFFF;
  text-align:center;
  div{
    width:400px;
    margin:auto;
  }
`
export const ConsumoConscienteContainer = styled.div`
  display:flex;
  text-align:center;
  color:#FFFFFF;
  margin-top:100px;
 div{
  margin:1vw;

 }
`
export const DivVerde = styled.div`
  background-color:#10BA6B;
  width:18vw;
`
export const Content = styled.div`
    margin:2vw;
    background-color:#068147;
    
    h3{
      margin:40px;
    }
  
`

export const PrincipaisParceiros = styled.div`
display:flex;
justify-content:space-between;
div{
  background-color:white;
}
img{
  width:200px;
}
`
export const OngApoiamos = styled.div`
`
export const PrincipaisParceirosContainer = styled.div`
text-align:center;
margin:0px 100px;

`