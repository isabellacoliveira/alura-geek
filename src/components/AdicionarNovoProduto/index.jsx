import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import { ProdutoContext } from 'Contextos/produtos';
import { useContext, useState } from 'react';
import produtos from 'json/produtos.json';

const CadastroNovoProduto = styled.form`
    background: #E5E5E5;
    text-align: left;
    height: 600px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    

    @media (min-width: 900px){
        input {
            height: 50px;
            width: 420px;
        }

        button {
            width: 420px;
            height: 60px;
       }

       select {
            width: 420px;
       }
    }

    @media (max-width: 900px){                
        input {
            height: 50px;
            width: 50%;
            margin-top: 100px;    
        }

        button {
            width: 200px;
            height: 70px;
            margin-top: 20px;
        }

        select {
            width: 230px;
        }
    }

    input, select {
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

    button{
        color: #FFFFFF;
        border: none;
        background: #2A7AE4;
        margin-top: 20px;
    }
`

export default function CadastraProduto () {
    const { imagem, setImagem, 
        categoria, setCategoria, 
        nomeProduto, setNomeProduto, 
        preco, setPreco,
        descricao, setDescricao } = useContext(ProdutoContext);

        const aoSalvar = (evento) => {
            evento.preventDefault()
            console.log("Seu produto foi cadastrado"); 
        }
        
    return(
        <CadastroNovoProduto onSubmit={aoSalvar}>
            
            <p>Adicionar novo produto</p>
            <input placeholder='Url da imagem'
                value={imagem}
                onChange={(evento) => setImagem(evento.target.value)}
            />
            <select placeholder='Categorias'
             >
                <option id="1">Star Wars</option>
                <option id="2">Consoles</option>
                <option id="3">Diversos</option>
            </select>
            <input placeholder='Nome do produto'
                value={nomeProduto}
                onChange={(evento) => setNomeProduto(evento.target.value)}
            />
            <input placeholder='Preço do produto'
                 value={preco}
                 onChange={(evento) => setPreco(evento.target.value)}
            />
            <input placeholder='Descrição do produto'
                 value={descricao}
                 onChange={(evento) => setDescricao(evento.target.value)}
            />
            <button 
            >Adicionar Produto</button>
    
        </CadastroNovoProduto>
    )
}

