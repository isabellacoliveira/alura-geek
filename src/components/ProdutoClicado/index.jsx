import { useParams } from "react-router-dom";
import PostModelo from "components/PostModelo";
import { useContext } from "react";
import { ProdutoContext } from "Contextos/produtos";
import NaoEncontrada from "Paginas/NaoEcontrada";

export default function ProdutoClicado(){
    const parametros = useParams()
    const { arrayDosProdutos } = useContext(ProdutoContext);

    const produto = arrayDosProdutos.find((produto) => {
        return produto.id === Number(parametros.id);
    })

    // if(!produto) {
    //     return <NaoEncontrada />;
    // }

    return(
        <>
        <PostModelo
            fotoCapa={`/assets/Produtos/${produto.id}/capa.png`}
            nome={produto.nome}
            preco={produto.preco}
        >
            {produto.descricao} 
        </PostModelo> 
        </>
       
    )
}