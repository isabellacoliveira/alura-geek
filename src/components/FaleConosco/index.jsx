import {React} from "react";
import styled from 'styled-components';
import LogoAluraGeek from '../../assets/Logo.png';

const Logo = styled.img`
   
    font-family: 'Raleway';
    font-style: normal;
   
    @media (min-width: 900px) {
        width: 100px;
        height: 40px;
        margin-right: 100px;
        margin-top: 30px;

    }
    @media (max-width: 900px) {
        width: 50%;
        padding-top: 10px;
    }
`

const LinksPaginas = styled.div`
    background-color: white;
    flex-direction: column;
    display: flex;
    background: transparent;   

    a {
        padding-top: 10px;
        text-decoration: none;
        color: #464646;
    }
`

const DivLogoELinks = styled.div`
    text-align: left;
    background-color: #EAF2FD;
    /* width: 100%; */

   

    @media(max-width: 900px) {
        display: block;
        flex-direction: row;
        text-align: center;
        width: 100%;
        align-items: center;
        padding-bottom: 20px;

       
    }

    @media(min-width: 900px){
        width: 50%; 
        display: flex;
        padding-top: 50px;
    }
`

const DivFaleConosco = styled.div`
    height: 300px;
    background: #EAF2FD;
    display: flex;
    flex-direction: column;
    text-align: left;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: bold;

    @media (max-width: 900px){
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 350px;
    }

    @media (min-width: 900px){
        width: 50%;
    }
    

`
const InputMensagem = styled.textarea`
        background: #FFFFFF;
        border-radius: none;
        border: none;
        font-family: 'Raleway';
        font-style: normal;
        outline: none;
        box-shadow: 0px 2px #C8C8C8;
        margin-right: 10px;
        padding-left: 20px;
        padding-top: 20px;
        box-sizing: border-box;
        border-radius: 4px 4px 0px 0px;
        margin-top: 20px;
        height: 90px;

        @media (max-width: 900px) {
            width: 300px;
        }

        @media (min-width: 900px) {
            width: 410px;
        }
`

const InputNome = styled.input`
        background: #FFFFFF;
        border-radius: none;
        border: none;
        font-family: 'Raleway';
        font-style: normal;
        outline: none;
        box-shadow: 0px 2px #C8C8C8;
        margin-right: 10px;
        padding-left: 20px;
        box-sizing: border-box;
        border-radius: 4px 4px 0px 0px ;
        height: 50px;

    @media (max-width: 900px){
        width: 300px;
    }

    @media (min-width: 900px){
        width: 410px; 
    }

`
 const BotaoEnviarMensagem = styled.button`
    background: #2A7AE4;
    border: none;
    outline: none;
    font-family: 'Raleway';
    font-style: normal;
    text-align: center;
    color: #FFFFFF;
    margin-top: 10px;
    width: 150px;
    padding: 15px 15px 15px 15px;

    @media (max-width: 900px){
        height: 50px;
    }
`

const Tudo = styled.div`
background-color: #EAF2FD;
    @media (max-width: 900px){
        display: block;
        flex-direction: column;
    }

    @media (min-width: 900px){
        display: flex;
        flex-direction: row;
        padding: 50px 50px 50px 200px;
    }
`

const FaleConosco = () => {


    return (
        <>
        <Tudo>
        <DivLogoELinks>
        <Logo src={LogoAluraGeek} />
            <LinksPaginas>
                <a href="#">Quem somos nós</a>
                <a href="#">Politica de privacidade</a>
                <a href="#">Progama fidelidade</a>
                <a href="#">Nossas lojas</a>
                <a href="#">Quero ser franqueado</a>
                <a href="#">Anuncie aqui</a>
            </LinksPaginas>
               
    </DivLogoELinks>
    
    <DivFaleConosco>        
                <p>Fale conosco</p>
                    <InputNome 
                            placeholder="Nome"
                            />
                    <InputMensagem
                             placeholder="Escreva sua mensagem" 
                             />
                <BotaoEnviarMensagem
                    >Enviar mensagem</BotaoEnviarMensagem>
            </DivFaleConosco>
        </Tudo>
    
          
        </>
    )
}

export default FaleConosco; 

