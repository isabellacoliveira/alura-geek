import styled from 'styled-components';

const CadastroInicioSessao = styled.div`
    background: #E5E5E5;
    text-align: center;
    height: 400px;
    padding-top: 100px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 900px){
        input {
            height: 50px;
            width: 420px;
        }
    }

    @media (max-width: 900px){                
        input {
            height: 50px;
            width: 50%;
            margin-top: 100px;    
        }
    }

    input{
        background: #FFFFFF;
        border: none;
        font-family: 'Raleway';
        font-style: normal;
        display: block;
        padding-left: 5px;
        outline: none;
        box-shadow: 0px 2px #C8C8C8;
        margin-top: 20px;
        padding-bottom: 20px;
        box-sizing: border-box;
        border-radius: 4px 4px 0px 0px ;
        padding-top: 20px;
    }

    @media (min-width: 900px){
       button {
            width: 420px;
       }
    }

    @media (max-width: 900px){
        button {
            width: 100px;
            margin-top: 20px;
        }
    }

    button{
        color: #FFFFFF;
        border: none;
        background: #2A7AE4;
        height: 30px;
        margin-top: 20px;
    }
`

const IniciarSessao = () => {
    return(
        <CadastroInicioSessao>
            <p>Iniciar Sessão</p>
            <input placeholder='escreva seu email'></input>
            <input placeholder='escreva sua senha'></input>
            <button>Entrar</button>
        </CadastroInicioSessao>
    )
}

export default IniciarSessao;