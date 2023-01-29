import styled from 'styled-components';
import { tenis } from '../dados/mock';
import Numeros from './Numeros';

export default function DescricaoProduto() {
    return (
        <ContainerDescricao>
            <h1>{tenis.name}</h1>
            <Numeros />
            <p>{tenis.description}</p>
        </ContainerDescricao>
    )
}

const ContainerDescricao = styled.div`
    width: 100%;
    border-radius: 10px;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.3);
    background-color: #FFFFFF;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;

    p{
        margin: 0px 40px 0px 40px;

    }

    h3{
        font-family: 'Raleway';
        font-weight: 700;
        font-size: 17px;    
}
h1{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 600;
        font-size: 28px;
        margin-top: 25px;
        margin-bottom: 10px;
    }
`
