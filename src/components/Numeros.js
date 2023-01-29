import styled from "styled-components"
import { tenis } from "../dados/mock"

export default function Numeros() {
    const listaNumeros = [37, 38, 39, 40, 41, 42, 43, 44];
    return (
        <>
            <h3>Números</h3>
            <div>
                {listaNumeros.map((number) => {
                    if (tenis.numbers.includes(number)) {
                        return <Botao>{number}</Botao>
                    }
                    else {
                        return <Botao disabled>{number}</Botao>
                    }
                })}
            </div>
        </>
    )
}

const Botao = styled.button`
        border: 1px solid #E3E3E3;
        box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.06);
        border-radius: 2px;
        width: 30px;
        height: 30px;
        font-weight: 400;
        font-size: 10px;
        color: black;
        font-family: 'Raleway';
        background-color: #FFFFFF;
        margin: 0px 5px 0px 5px;
`