import Cabecalho from "components/Cabecalho";
import FaleConosco from "components/FaleConosco";
import ProdutosFiltrados from "components/ProdutosFiltrados";
import Foot from "components/Rodape";
const { default: Banner } = require("components/Banner");


function PaginaPrincipal() {
  return (
    <>
        <Cabecalho />
        <Banner />
        <section id="sessaoStarWars">
          <ProdutosFiltrados IDcategoria='1'/>
        </section>
        <section id="sessaoConsoles">
          <ProdutosFiltrados IDcategoria='2'/>
        </section>
        <section id="sessaoDiversos">
          <ProdutosFiltrados IDcategoria='3'/>
        </section>
        <FaleConosco />
        <Foot />
    </>
  )
}

export default PaginaPrincipal;



