import FaleConosco from "components/FaleConosco";
import ProdutosFiltrados from "components/ProdutosFiltrados";
import { ProdutoContext } from "Contextos/produtos";
import { useContext } from "react";
const { default: Banner } = require("components/Banner");


function PaginaPrincipal() {
    const { nomeProduto, categoria, imagem,  preco , descricao} = useContext(ProdutoContext);
    const { arrayDosProdutos } = useContext(ProdutoContext);
  return (
    <>
        <Banner />
        <div className="ProdutoCadastrado">
            <img src={imagem}></img>
            <h1>{nomeProduto}</h1>
            <h2>{preco}</h2>
            <h2>{descricao}</h2>
            <h2>{categoria}</h2>
            {/* <ProdutoCard 
                produtoTitulo={nomeProduto}
            /> */}
        </div>
        <ProdutosFiltrados IDcategoria='1'/>
        <ProdutosFiltrados IDcategoria='2'/>
        <ProdutosFiltrados IDcategoria='3'/>
        <FaleConosco />
    </>
  )
}

export default PaginaPrincipal;



