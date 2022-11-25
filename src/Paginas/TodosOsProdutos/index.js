import FaleConosco from "components/FaleConosco";
import PaginaPrincipal from "Paginas/PaginaPrincipal";
import { Link } from "react-router-dom";
import styles from './TodosOsProdutos.module.css'; 
import styled from 'styled-components'; 
import produtos from "json/produtos.json";
import ProdutoCard from "components/ProdutoCard";


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

export default function TodosOsProdutos(){
    return(
        <>
            <div className={styles.TodosOsProdutos}>
                <h1>Todos os produtos</h1>
                <Link to="/cadastrarproduto" className={styles.BotaoCadastraProduto}>Adicionar Produto</Link>
               
            </div>
            <ListaDeProdutos >
            {produtos.map((produto) => (
                <li key={produto.id}>
                    <ProdutoCard produto={produto} />
                </li>
            ))}
        </ListaDeProdutos>
            <FaleConosco />
        </>
       
    )
}