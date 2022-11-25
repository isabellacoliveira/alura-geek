import styles from './ProdutoCard.module.css'; 
import { Link } from 'react-router-dom';

export default function ProdutoCard({ produto }){
    return(
        <>
        <Link to={`/produto/${produto.id}`} className={styles.LinkParaOutraPagina}>
        <div className={styles.CardDoProduto}>
            <img className={styles.ImagemDeCapaDoProduto}
                src={`/assets/Produtos/${produto.id}/capa.png`}
                alt="imagem de capa do post"
            />
            <h1>{produto.titulo}</h1> 
            <h2>{produto.preco}</h2>
            <h2>{produto.categoria}</h2>
            <button className={styles.BotaoVerProduto} to="/produto">Ver Produto</button> 
        </div>
        </Link>
       
        </>
        )
}
