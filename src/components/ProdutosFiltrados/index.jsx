import ProdutoCard from 'components/ProdutoCard';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components'; 
import IconeSeta from 'assets/iconeSeta.png';
import { useContext } from 'react';
import { ProdutoContext } from 'Contextos/produtos';

const ListaDeProdutos = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-top: 50px;
    padding-bottom: 50px;

 li {
    list-style: none;
    padding-right: 8px;
    padding-top: 10px;
 }

@media (max-width: 900px) {
        margin: 0 ;
        padding: 2rem 1rem 3rem;
}
 
@media (min-width: 900px) {
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

    const { arrayDosProdutos } = useContext(ProdutoContext);
    IDcategoria = Number(IDcategoria);

    return (
        <> 
        {(pathname === '/home' ||  pathname === '/') ?  <Cima>
        <Titulos>{IDcategoria ===  1 ? "Star Wars" : IDcategoria === 2 ? "Consoles" : "Diversos"}</Titulos>
            <Link to="/produtos" className="BotaoVerTudo">
                Ver tudo
                <img src={IconeSeta}
                    alt="icone de uma seta"
                />
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