import FaleConosco from "components/FaleConosco";
import ContemPosts from "components/ProdutosPorCategoria";
import VerJson from "components/ProdutosPorCategoria";

const { default: Banner } = require("components/Banner");


function PaginaPrincipal() {
  return (
    <>
        <Banner />
        <ContemPosts />
        <FaleConosco />
    </>
  )
}

export default PaginaPrincipal;
