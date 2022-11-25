import { BrowserRouter, Routes, Route } from "react-router-dom";
import Logando from "Paginas/Login";
import Cabecalho from "components/Cabecalho";
import PaginaPrincipal from "Paginas/PaginaPrincipal";
import Foot from "components/Rodape";
import TodosOsProdutos from "Paginas/TodosOsProdutos";
import CadastroProduto from "Paginas/CadastrarProduto";
import NaoEncontrada from "Paginas/NaoEcontrada";
import ProdutoClicado from "components/ProdutoClicado";
import ProdutoSelecionado from "Paginas/ProdutoIndividual";
import ScrollToTop from "components/ScrollToTop";

function App(){
    return (
        <BrowserRouter>
        <ScrollToTop />
        <Cabecalho />
            <Routes>
                    <Route path="/" element={<PaginaPrincipal />}/>
                    <Route path="/home" element={<PaginaPrincipal />}/>
                    <Route path="/Login" element={<Logando />}/>
                    <Route path="/produtos" element={<TodosOsProdutos />}/>
                    <Route path="/cadastrarproduto" element={<CadastroProduto />}/>
                    {/* associar isso ao clique do botão  */}
                    <Route path="/produto/:id/*" element={<ProdutoSelecionado />}/>
                    <Route path="*" element={<NaoEncontrada />}/>
            </Routes>
        <Foot />
        </BrowserRouter>
    )
}

export default App;