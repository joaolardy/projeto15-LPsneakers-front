import { tenis } from '../dados/mock';
import styled from 'styled-components';
import DescricaoProduto from '../PaginaProduto/DescricaoProduto';
import {BotaoComprar} from '../style/GlobalStyle';

export default function PaginaProduto() {

    return (
        <FundoProduto>
            <BarraSuperior>
                <ion-icon name="arrow-back-outline"></ion-icon>
                <ion-icon name="heart-outline"></ion-icon>
            </BarraSuperior>
            <FotoProduto src={tenis.photo} alt={tenis.name} />
            <DescricaoProduto />
            <BotaoComprar>Comprar</BotaoComprar>
        </FundoProduto>
    );
}

const BarraSuperior = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    background-color: #F6F6F6;
    margin-top: 25px;
    ion-icon {
        font-size: 24px;
    }
`
const FotoProduto = styled.img`
    width: 60%;
`
const FundoProduto = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F6F6F6;
    height: 100%;
    width: 100%;

`
