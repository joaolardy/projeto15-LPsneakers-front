import { tenis } from "../dados/mock";
import styled from "styled-components";
import { TituloSecundario } from "../style/GlobalStyle";

export default function Preco(){
    return(
        <ContainerPreco>
            <TituloSecundario>Total</TituloSecundario>
            <Valor>{tenis.price}</Valor>
        </ContainerPreco>
    )
}

const ContainerPreco = styled.div`
        margin-top: 50px;
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-around;
        `

const Valor = styled.div`
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        padding-left: 20px;
        color: #5956E9;
        text-decoration: none;
        `