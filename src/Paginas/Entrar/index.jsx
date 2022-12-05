import styles from './Entrar.module.css'; 
import LogoGrande from 'assets/LogoGrande.png';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

function Entrar() {
        const [filled, setFilled] = useState(0);
        const [estaCorrendo, setEstaCorrendo] = useState(false);
        const navigate = useNavigate();

        function olaUsuario(){
            alert("Olá, seja bem-vindo ao Alura-Geek! Clique no botão para começar")
        }

        useEffect(() => {
            if(filled < 100 && estaCorrendo){
                setTimeout(() => setFilled(prev => prev += 2), 10)
            }
        },[filled, estaCorrendo]); 
       
 
    return (
        <>
                <div className={styles.App} onLoad={olaUsuario}>
                    <img 
                        src={LogoGrande} 
                        alt="Logo do Alura Geek"
                    />
                    <div className={styles.progressBar}>
                        <div style={{
                           height: "100%",
                           width: `${filled}%`,
                           backgroundColor: "#2A7AE4",
                           transition:"width 0.5s"
                        }}>
                        </div>
                        
                    </div>
                    <span className={styles.progressPercent}>{filled}%</span>

                        <button 
                            className={styles.btn} 
                            onClick={() => {setEstaCorrendo(true)}} 
                            onSubmit={filled === 100 ? navigate('/home') : null}
                            type="submit"
                            >Começar</button>
                </div>
        </>
    )
    
}

export default Entrar;



