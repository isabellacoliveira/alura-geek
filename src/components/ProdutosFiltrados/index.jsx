import ProdutoCard from 'components/ProdutoCard';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components'; 
import IconeSeta from 'assets/iconeSeta.png';
import { useContext, useState } from 'react';
import { ProdutoContext } from 'Contextos/produtos';

const ListaDeProdutos = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-top: 50px;
    padding-bottom: 50px;
    margin-top: -2.5rem;
    background: #E5E5E5;
    gap: 2rem;
    

 li {
    list-style: none;
 }

@media (max-width: 900px) {
        margin-top: 0;
        padding: 2rem 1rem 3rem;
}
 
@media (min-width: 900px) {
        /* padding: 4rem 6rem 3rem 9rem;  */
        display: flex;
        flex-direction: row;
        margin: 0 auto;
        justify-content: center;
        align-items: center;
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

export default function ProdutosFiltrados({IDcategoria}){
    const {pathname} = useLocation() 
    console.log(pathname)

    const { arrayDosProdutos } = useContext(ProdutoContext);
    IDcategoria = Number(IDcategoria);

    return (
        <> 
        {(pathname === '/home' ||  pathname === '/') ?  <Cima>
        <Titulos>{IDcategoria ===  1 ? "Star Wars" : IDcategoria == 2 ? "Consoles" : "Diversos"}</Titulos>
            <Link to="/produtos" className="BotaoVerTudo">
                Ver tudo
                <img src={IconeSeta} />
            </Link>
        </Cima> : <Titulos>Consoles</Titulos> }
        

        {(pathname === '/home' ||  pathname === '/') ? <ListaDeProdutos>
         {arrayDosProdutos.map((produto) => (
                <li key={produto.id}>
                    {Number(produto.IDcategoria) === IDcategoria ?
                            <ProdutoCard produto={produto} /> 
                            : null}
                </li>
            ))}
    </ListaDeProdutos> : <ListaDeProdutos> {arrayDosProdutos.map((produto) => (
        <li key={produto.id}>
            {Number(produto.IDcategoria) === 2 ? <ProdutoCard produto={produto}/> : null}
        </li>
    ))}</ListaDeProdutos>} 

    
  
        
        </>
       
    )
}