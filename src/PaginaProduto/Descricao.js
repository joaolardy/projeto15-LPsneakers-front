import styled from "styled-components"
import { tenis } from "../dados/mock"
import { TituloSecundario } from "../style/GlobalStyle"

export default function Descricao() {
    return (
        <ContainerDescricao>
            <TituloSecundario>Descrição</TituloSecundario>
            <p>{tenis.description}</p>
            <ContainerFicha>
                <a href="nike.com">Ficha Técnica</a>
                <ion-icon name="arrow-forward-outline"></ion-icon>
            </ContainerFicha>
        </ContainerDescricao>
    )
}

const ContainerDescricao = styled.div`
    p{
        margin: 10px 40px 0px 40px;
        font-family: 'Raleway';
        font-weight: 400;
        font-size: 15px;
        opacity: 0.7;

    }
`

const ContainerFicha = styled.div`
    display: flex;
    margin-top: 10px;
    a{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        padding-left: 20px;
        color: #5956E9;
        text-decoration: none;
    }
    ion-icon{
    color: #5956E9;
    font-size: 20px;

}
`