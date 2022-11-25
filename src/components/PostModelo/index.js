import styles from './PostModelo.module.css';
import produtos from 'json/produtos.json';
import { useParams } from 'react-router-dom';
import ProdutoCard from 'components/ProdutoCard';
// import NaoEncontrada from 'Paginas/NaoEcontrada';

export default function PostModelo({ children, titulo, preco, categoria }) {
    const parametros = useParams()
    const produto = produtos.find((produto) => {
        return produto.id === Number(parametros.id);
    })

    // if(!produto){
    //     return <NaoEncontrada />
    // }

    const produtosRecomendados = produtos
        .filter((produto) => produto.id !== Number(parametros.id))
        .sort((a, b) => b.id - a.id)
        .slice(0, 6);

        console.log(produtosRecomendados)

    return (
        <>
            <article className={styles.postModeloContainer}>
            <div className={styles.divDaImagem}>
                    <img 
                        src={`/assets/Produtos/${produto.id}/capa.png`}
            />
                </div>
                <div className={styles.conteudoDoProduto}>
                    <h2 className={styles.titulo}>
                        {titulo}
                    </h2>

                    <h2 className={styles.preco}>
                        {preco}
                    </h2>

                    <div className={styles.postConteudoContainer}>
                        {children}
                    </div>
                </div>
               
                    
            </article>
            
            <div className={styles.grupoProdutosSimilares}>
                 <h2 className={styles.ProdutosSimilares}>
                    Produtos similares:
            </h2>

            <ul className={styles.postsRecomendados}>
                {produtosRecomendados.map((produto) => (
                    <li key={produto.id}>
                        <ProdutoCard produto={produto} />
                    </li>
                ))
            }
            </ul>
        </div>
           
           
        </>
    )
}