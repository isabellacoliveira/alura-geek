import Cabecalho from "components/Cabecalho";
import FaleConosco from "components/FaleConosco";
import Foot from "components/Rodape";
import { useState } from "react";
// import { useState } from "react";
import styled from 'styled-components'; 

const CadastroDoUsuario = styled.div`
    width: 100%;
    height: 600px;
    margin-top: 90px;

    button{
        color: #FFFFFF;
        border: none;
        background: #2A7AE4;
        height: 50px;
        font-family: 'Raleway';
        font-style: normal;
    }

    @media (min-width: 900px){
       button {
            width: 420px;
            margin-top: 30px;
       }
    }

    @media (max-width: 900px){
        button {
            width: 100px;
            margin-top: 20px;
        }
    }

    form {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    h1 {
        text-align: center;
    }

    label {
        padding-top: 10px;
    }
`

const InputGlobal = styled.input`
	@media (min-width: 900px) {
			height: 50px;
			width: 420px;
	}

	@media (max-width: 900px) {
			height: 50px;
			width: 50%;
		}
	
		background: #ffffff;
		border: none;
		display: block;
		padding-left: 5px;
		outline: none;
		box-shadow: 0px 2px #c8c8c8;
		margin-top: 20px;
		padding-bottom: 20px;
		box-sizing: border-box;
		border-radius: 4px 4px 0px 0px;
		padding-top: 20px;	
        margin-top: 10px;

	::-webkit-input-placeholder {
            font-family: 'Raleway';
            font-style: normal;
			color: #c8c8c8;
	}

   
`

export default function Cadastro(){
    const[usuario, setUsuario] = useState({
        nome: '', 
        email: '', 
        senha: '', 
        confirmacaoDaSenha: ''
    }); 

    // setUsuario({
    //     nome: '', 
    //     email: '', 
    //     senha: '', 
    //     confirmacaoDaSenha: ''
    // })

    // const [status, setStatus] = useState({
        // tipo: '',
    //     mensagem: ''
    //   });

    // const valorDoInput = e => setUsuario({ ...usuario, [e.target.name]: e.target.value });
    // const salvaDadosDoFormulario = true;

    // if (salvaDadosDoFormulario) {
    //     setStatus({
    //       tipo: 'success',
    //       mensagem: "Usuário cadastrado com sucesso!"
    //     });
    //     setUsuario({
    //       nome: '',
    //       email: '',
    //       senha: '',
    //       confirmacaoDaSenha: ''
    //     });
    //   } else {
    //     setStatus({
    //       tipo: 'error',
    //       mensagem: "Erro: Usuário não cadastrado com sucesso!"
    //     });
    //   }

    function confereSenha() {
        const senha = document.querySelector('#senha');
        const confirmacaoDaSenha = document.querySelector('#confirmaSenha');

        if(confirmacaoDaSenha.value === senha.value){
            confirmacaoDaSenha.setCustomValidity('')
        } else {
            confirmacaoDaSenha.setCustomValidity('as senhas devem ser iguais')
        }
    }

    function senhaOk(){
        alert("sucesso")
    }

    return (
        <>
            <Cabecalho />
            <CadastroDoUsuario onSubmit={senhaOk}>
                <h1>Cadastrar Usuário</h1>
                {/* {status.tipo === 'success' ? <p style={{ color: "green" }}>{status.mensagem}</p> : ""}
                {status.tipo === 'error' ? <p style={{ color: "#ff0000" }}>{status.mensagem}</p> : ""} */}
                <form>
                <label>Nome</label>
                <InputGlobal
                    placeholder="Digite seu nome"
                    type="text"
                    required
                    // value={usuario.nome}
                    // onChange={valorDoInput}
                />
                <label>Email</label>
                <InputGlobal
                    placeholder="Digite seu email"
                    type="text"
                    required
                    // value={usuario.email}
                    // onChange={valorDoInput}

                />
                <label>Senha</label>
                <InputGlobal
                    placeholder="Escolha uma senha"
                    type="password"
                    required
                    id="senha"
                    onChange={confereSenha}

                    // value={usuario.senha}
                    // onChange={valorDoInput}

                />
                <label>Confirmação da senha</label>
                <InputGlobal
                    placeholder="Repita a senha"
                    type="password"
                    required
                    id="confirmaSenha"
                    onChange={confereSenha}
                    // value={usuario.confirmacaoDaSenha}
                    // onChange={valorDoInput}

                />
                <button 
                    type="submit"
                >Cadastrar</button>
                </form>
            </CadastroDoUsuario>
            <FaleConosco />
            <Foot />
        </>
    )
}