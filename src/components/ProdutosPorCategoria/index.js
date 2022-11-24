import JsonDosPosts from 'json/produtos.json'; 
import { Link } from 'react-router-dom';
import styles from './ProdutosPorCategoria.module.css';
import IconeSeta from 'assets/iconeSeta.png'
import CardDoProduto from 'components/CardDoProduto';
import React from 'react'; 

export default function ContemPosts(){
    return (<>
    <section className={styles.TodasAsSessoes}>
        <div className={styles.LinhaProduto}>
            <div className={styles.LinhaSessaoBotao}>
                <h1 className={styles.Temas}>Star Wars</h1>
                <Link className={styles.BotaoVerTudo} to="/produtos">
                Ver Tudo
                    <img src={IconeSeta} className={styles.IconeSetinha}/>    
                </Link>
                
            </div>

            <div className={styles.AlinhaItens}>
                <ul className={styles.StarWars}>
                    <CardDoProduto />
                </ul>
            </div>
            
        </div>

        <div className={styles.LinhaProduto}>
            <div className={styles.LinhaSessaoBotao}>
                <h1 className={styles.Temas}>Consoles</h1>
                <Link className={styles.BotaoVerTudo} to="/produtos">
                Ver Tudo
                    <img src={IconeSeta} className={styles.IconeSetinha}/>    
                      
                    </Link>
                </div>

                <ul className={styles.Consoles}>
                   aqui ficarão os consoles
                </ul>
        </div>      
        
        <div className={styles.LinhaProduto}>
            <div className={styles.LinhaSessaoBotao}>
            <h1 className={styles.Temas}>Diversos</h1>
            <Link className={styles.BotaoVerTudo} to="/produtos">
                    Ver Tudo
                <img src={IconeSeta} className={styles.IconeSetinha}/>    
            </Link>            
            </div>
       </div>

       <ul className={styles.Diversos}>

            {/* <img
                src={`/assets/Produtos/3/capa.png`}
            />
           {JsonDosPosts.map((post) => (
            <li key={post.id}>
                <Post />
            </li>
           ))} */}
           aqui ficarão os diversos
        </ul>
    </section>
    </>
    )
}



