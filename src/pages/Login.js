import styled from "styled-components";
import { BotaoComprar, TituloSecundario } from "../style/GlobalStyle";

export default function Login(){
    return(
        <ContainerLogin>
            <LoginTopo>
                <h1>LP SNEAKERS</h1>
                <h2>bem vindo de volta</h2>
            </LoginTopo>
            <LoginCampos>
                <TituloSecundario>Login</TituloSecundario>
                <form action="">
                    <input type="text" placeholder="E-mail"/>
                    <input type="password" placeholder="Senha"/>
                    <BotaoLogin type='submit'>Entrar</BotaoLogin>
                </form>
            </LoginCampos>
            <span>Ainda não tem uma conta? Cadastre-se!</span>

        </ContainerLogin>
    )
}

const ContainerLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    width:100%;
    height:100%;
    background-color: #5956E9;

    h1{
        font-family: 'Raleway';
        font-weight: 800;
        font-size: 40px;
    }
    h2{
        font-family: 'Raleway';
        font-weight: 800;
        font-size: 30px;
    }
    span{
        font-family: 'Raleway';
        font-weight: 600;
        font-size: 16px;
        color: #5956E9;
        background-color: white;
        width: 100%;
        height: 100%;
        text-align: center;
    }
    `
const LoginTopo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 500px;
    color: white;
    `

const LoginCampos = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 200px;
    border-radius:  20px 20px 0px 0px;
    
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    input{
        width: 80%;
        height: 50px;
        border: none;
        margin-top: 20px;
        border: 1px solid #5956E9;
        border-radius: 10px;
        padding-left: 10px;
        font-family: 'Raleway';
        font-weight: 600;
    }
    h3{
        margin-left:0px;
        margin-top: 20px;
        text-align: left;
    }
`
const BotaoLogin = styled.button`
    width: 80%;
    height: 70px;
    background-color: #5956E9;
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    font-size: 20px;
    font-weight: 700;
    font-family: 'Raleway';
    display: flex;  
    justify-content: center;
    align-items: center;
    color: white;
    position: fixed;
    bottom: 40px;
`

