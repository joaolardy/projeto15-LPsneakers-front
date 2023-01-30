import styled from "styled-components"
import { tenis } from "../dados/mock"
import { TituloSecundario } from "../style/GlobalStyle";
export default function Numeros() {
    const listaNumeros = [37, 38, 39, 40, 41, 42, 43, 44];
    return (
        <>
            <ContainerTamanhos>
                <TituloSecundario>Tamanhos</TituloSecundario>
                <ContainerNumeros>
                    {listaNumeros.map((number) => {
                        if (tenis.numbers.includes(number)) {
                            return <Botao>{number}</Botao>
                            }
                        else {
                            return <Botao disabled>{number}</Botao>
                        }
                    })}
                </ContainerNumeros>
            </ContainerTamanhos>
        </>
    )
}

const ContainerTamanhos = styled.div`
display: flex;
flex-direction: column;
text-align: left;
width:100%;
h3{
        font-family: 'Raleway';
        font-weight: 700;
        font-size: 17px;
    }
`

const Botao = styled.button`
        border: 1px solid #E3E3E3;
        box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.06);
        border-radius: 2px;
        width: 30px;
        height: 30px;
        font-weight: 500;
        font-size: 10px;
        color: black;
        font-family: 'Raleway';
        background-color: #FFFFFF;
        margin: 10px 5px 30px 5px;

        :disabled{
            background-color: #E3E3E3;
        }
`
const ContainerNumeros = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`