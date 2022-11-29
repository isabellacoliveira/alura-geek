import FaleConosco from "components/FaleConosco";
import ProdutosFiltrados from "components/ProdutosFiltrados";
import { ProdutoContext } from "Contextos/produtos";
import { useContext } from "react";
const { default: Banner } = require("components/Banner");


function PaginaPrincipal() {
  return (
    <>
        <Banner />
        <ProdutosFiltrados IDcategoria='1'/>
        <ProdutosFiltrados IDcategoria='2'/>
        <ProdutosFiltrados IDcategoria='3'/>
        <FaleConosco />
    </>
  )
}

export default PaginaPrincipal;



