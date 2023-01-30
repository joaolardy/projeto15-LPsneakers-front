import styled from 'styled-components';
import { tenis } from '../dados/mock';
import Numeros from './Numeros';
import Descricao from './Descricao';
import Preco from './Preco';

export default function DescricaoProduto() {
    return (
        <ContainerDescricao>
            <h1>{tenis.name}</h1>
            <Numeros />
            <Descricao />
            <Preco />
        </ContainerDescricao>
    )
}

const ContainerDescricao = styled.div`
    width: 100%;
    height: 550px;
    border-radius: 20px;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.3);
    background-color: #FFFFFF;
    align-items: center;
    display: flex;
    flex-direction: column;
    text-align: left;
h1{
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    margin-top: 25px;
    margin-bottom: 10px;
}
`