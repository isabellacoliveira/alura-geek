import Cabecalho from "components/Cabecalho";
import FaleConosco from "components/FaleConosco";
import ProdutoClicado from "components/ProdutoClicado";
import Foot from "components/Rodape";

export default function ProdutoSelecionado(){
    return(
        <>
            <Cabecalho />
            <ProdutoClicado />
            <FaleConosco />
            <Foot />
        </>
       
    )
}