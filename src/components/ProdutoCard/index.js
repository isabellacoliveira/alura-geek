import styles from './ProdutoCard.module.css'; 
import { Link, useLocation } from 'react-router-dom';
import lixo from 'assets/lixo.png';
import lapis from 'assets/lapis.png';


export default function ProdutoCard({ produto }){
    const {pathname} = useLocation(); 
    return(
        <>
        <Link to={`/produto/${produto.id}`} className={styles.LinkParaOutraPagina}>
        <div className={styles.CardDoProduto}>
            <div className={styles.imagensCima}>
                <img className={styles.ImagemDeCapaDoProduto}
                    src={`/assets/Produtos/${produto.id}/capa.png`}
                    alt="imagem de capa do post"
                />
                <div className={styles.soOsIcones}>
                {pathname === '/produtos' ? <img src={lixo} className={styles.imagemIcone1} /> : null}
                {pathname === '/produtos' ? <img src={lapis} className={styles.imagemIcone2}/> : null}
                </div>
                
            </div>
            <h1>{produto.titulo}</h1> 
            <h2>{produto.preco}</h2>
            <button className={styles.BotaoVerProduto} to="/produto">Ver Produto</button> 
        </div>
        </Link>
       
        </>
        )
}
