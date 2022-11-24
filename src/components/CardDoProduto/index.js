import styles from './CardDoProduto.module.css'; 
import icone1 from 'assets/star.png'; 
import { Link } from 'react-router-dom';
import Produtos from  'json/produtos.json'; 

export default function CardDoProduto({ titulo }){
    console.log(Produtos[0].titulo)
    let i = 0; 
    
    for(i = 0; i < Produtos.length; i++){
        console.log(`Produto ${Produtos[i].titulo},  
                    o id é ${Produtos[i].id}, 
                    o preço é ${Produtos[i].preco}
                    imagem ${Produtos[i].imagem},
                    a categoria é ${Produtos[i].imagem}
                    `)
    }
    return(
        <>
        <div className={styles.CardDoProduto}>
            <img className={styles.ImagemDeCapaDoProduto}
                src={icone1}
            />
            <h1 className={styles.TituloDoProduto}></h1>
            <h2 className={styles.PrecoDoProduto}>R$ 60,00</h2>
            <Link className={styles.BotaoVerProduto} to="/produto">Ver Produto</Link>
        </div>

       
        </>
        )
}
