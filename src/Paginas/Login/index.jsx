import Cabecalho from "components/Cabecalho";
import FaleConosco from "components/FaleConosco";
import IniciarSessao from "components/IniciarSessão";
import Foot from "components/Rodape";

export default function Logando(){
    return(
        <>
            <Cabecalho />
            <IniciarSessao />
            <FaleConosco/>
            <Foot />
        </>
       
    )
}