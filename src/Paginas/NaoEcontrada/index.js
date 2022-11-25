import styles from './NaoEncontrada.module.css';
import erro404 from 'assets/errroooo.webp'
import { useNavigate } from 'react-router-dom';

export default function NaoEncontrada() {
    const navegar = useNavigate();

    return (
        <>
            <div className={styles.conteudoContainer}>
                <span className={styles.texto404}>404</span>

                <h1 className={styles.titulo}>
                    Ops! Página não encontrada.
                </h1>

                <p className={styles.paragrafo}>
                    Tem certeza de que era isso que você estava procurando?
                    Aguarde uns instantes e recarregue a página, ou volte para a página inicial.
                </p>

                <div
                    className={styles.botaoContainer}
                    onClick={() => navegar(-1)}
                >
                    <button className='botaoVoltar'>Voltar</button>
                </div>

                <img
                    className={styles.imagemCachorro}
                    src={erro404}
                    alt="cogumelo do mario"
                />
            </div>
            <div className={styles.espacoEmBranco}></div>
        </>

    )
}