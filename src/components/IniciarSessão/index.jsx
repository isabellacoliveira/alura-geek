import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CadastroInicioSessao = styled.div`
    background: #E5E5E5;
    text-align: center;
    height: 400px;
    padding-top: 100px;
    padding-bottom: 100px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: bold;
    
    .cadastroDoUsuario{
        display: flex;
        flex-direction: row;
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
        margin-bottom: 20px;
        width: 420px;
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
        height: 10px;
    }

    .cadastro {
        background: #2A7AE4;
        height: 30px;
        width: 420px;

        &:hover {
        transform: translateY(-4px);
        cursor: pointer;
        }
    }

    .cadastre {
        background: #2A7AE4;
        height: 30px;
        width: 300px;
        margin-left: 10px;
    }

     div {
        padding-top: 10px;
     }

    .tituloCadastrar{
        text-decoration: none;
        font-weight: normal;
        color: #FFFFFF;
        width: 30px;
    }
`

const IniciarSessao = () => {
    function loginFeito(evento) {
        evento.preventDefault()
        const emailDoUsuario = document.getElementById('#emailDoUsuario'); 
        console.log(emailDoUsuario)
    }

    return(
        <CadastroInicioSessao>
            <p>Iniciar Sessão</p>
            <form onSubmit={loginFeito}>
                <label>Email</label>
                <input 
                    placeholder='escreva seu email'
                    type="text"
                    required    
                    id="emailDoUsuario"
                ></input>
                <label>Senha</label>
                <input 
                    placeholder='escreva sua senha'
                    required
                    type="password"
                    id = "senhaDoUsuario"
                ></input>
                <div className='cadastro'>
                    <button 
                        className='tituloCadastrar'
                        type="submit"
                    >Entrar</button>
                </div>
            </form>
           
           <div className='cadastroDoUsuario'>
                <p>Não possui cadastro?</p>
                <div className="cadastre">
                    <Link to='/cadastro' className='tituloCadastrar'>Cadastre-se</Link>
                </div>
           </div>
            
        </CadastroInicioSessao>
    )
}

export default IniciarSessao;