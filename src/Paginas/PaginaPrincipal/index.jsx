import FaleConosco from "components/FaleConosco";

import ListaDeProdutosFiltrados from "components/ListaDeProdutos";

const { default: Banner } = require("components/Banner");



function PaginaPrincipal() {
  return (
    <>
        <Banner />
        {/* <ListaDeProdutos >
            {produtos.map((produto) => (
                <li key={produto.id}>
                    {produto.categoria === "StarWars" ?  
                            <ProdutoCard produto={produto} /> : null}
                </li>
            ))}
        </ListaDeProdutos> */}
        <ListaDeProdutosFiltrados />
        <FaleConosco />
    </>
  )
}

export default PaginaPrincipal;
