import FaleConosco from "components/FaleConosco";
import { Link } from "react-router-dom";
import styles from './TodosOsProdutos.module.css'; 

export default function TodosOsProdutos(){
    return(
        <>
            <div>
                <h1>Todos os produtos</h1>
                <Link to="/cadastrarproduto" className={styles.BotaoCadastraProduto}>Cadastrar Produto</Link>
            </div>
            <FaleConosco />
        </>
       
    )
}