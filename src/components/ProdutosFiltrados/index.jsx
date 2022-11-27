import ProdutoCard from 'components/ProdutoCard';
import { Link } from 'react-router-dom';
import styled from 'styled-components'; 
import produtos from "json/produtos.json";
import IconeSeta from 'assets/iconeSeta.png';
import { useState } from 'react';



const ListaDeProdutos = styled.ul`
    padding: 0 6vw 3.625rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.5rem;
    padding-top: 50px;
    margin-top: -2.5rem;
    background: #E5E5E5;

 li {
    list-style: none;
 }

@media (max-width: 1100px) {
        margin-top: 0;
        padding: 2rem 1.5rem 3.625rem;
}
 
@media (min-width: 744px) {
        padding: 4rem 6rem 3rem 9rem;
}
`

const Titulos = styled.h1`
        @media (min-width: 900px) {
            padding-left: 220px;
            padding-top: 20px;
        }
        @media (max-width: 900px) {
            padding-left: 10px;
        }
`
const Cima = styled.div`
            background: #E5E5E5;
            display: flex;
            flex-direction: row;

        .BotaoVerTudo{
            color: #2A7AE4;
            border: none;
            text-decoration: none;
            font-weight: bold;
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 700;

            @media (min-width: 900px) {
                padding-left: 1060px;
                padding-top: 50px;
            }

            @media (max-width: 900px) {
                padding-left: 200px;
                padding-top: 30px;
                padding-right: 5px;
            }
        }

        .BotaoVerTudo img {
            margin-left: 10px;
            }
`

export default function ProdutosFiltrados({nomeProduto}){
    const [listaProdutos, setListaProdutos] = useState(produtos);



    // function adicionaProduto() {
    //     setListaProdutos([produtoNovo, ...listaProdutos])
    // }
    return (
        <> 
        <Cima>
        <Titulos>{nomeProduto}</Titulos>
            <Link to="/produtos" className="BotaoVerTudo">
                Ver tudo
                <img src={IconeSeta} />
            </Link>
            </Cima>

        
    <ListaDeProdutos>
         {listaProdutos.map((produto) => (
                <li key={produto.id}>
                    {produto.categoria === nomeProduto ?
                            <ProdutoCard produto={produto} /> 
                            : null}
                </li>
            ))}
    </ListaDeProdutos>
  
        
        </>
       
    )
}