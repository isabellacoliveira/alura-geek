import { useParams } from "react-router-dom";
import produtos from 'json/produtos.json';
import PostModelo from "components/PostModelo";

export default function ProdutoClicado(){
    const parametros = useParams()
    console.log(parametros.categoria)

    const produto = produtos.find((produto) => {
        return produto.id === Number(parametros.id);
    })

    return(
        <>
        <PostModelo
            fotoCapa={`/assets/Produtos/${produto.id}/capa.png`}
            titulo={produto.titulo}
            preco={produto.preco}
        >
            {produto.texto} 
        </PostModelo> 
        </>
       
    )
}