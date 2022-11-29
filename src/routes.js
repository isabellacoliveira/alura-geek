import { BrowserRouter, Routes, Route } from "react-router-dom";
import Logando from "Paginas/Login";
import Cabecalho from "components/Cabecalho";
import PaginaPrincipal from "Paginas/PaginaPrincipal";
import Foot from "components/Rodape";
import TodosOsProdutos from "Paginas/TodosOsProdutos";
import CadastroProduto from "Paginas/CadastrarProduto";
import NaoEncontrada from "Paginas/NaoEcontrada";
import ProdutoSelecionado from "Paginas/ProdutoIndividual";
import ScrollToTop from "components/ScrollToTop";
import  ProdutoProvider from "Contextos/produtos";
import SoConsoles from "Paginas/SoConsoles";

function App(){

    return (
        <ProdutoProvider>
            <BrowserRouter>
                <ScrollToTop />
                <Cabecalho />
                <Routes>
                    <Route path="/" exact element={<PaginaPrincipal />}/>
                    <Route path="/home" element={<PaginaPrincipal />}/>
                    <Route path="/Login" element={<Logando />}/>
                    <Route path="/produtos" element={<TodosOsProdutos />}/>
                    <Route path="/consoles" element={<SoConsoles />}/>
                    <Route path="/cadastrarproduto" element={<CadastroProduto />}/>
                    <Route path="/produto/:id/*" element={<ProdutoSelecionado />}/>
                    <Route path="*" element={<NaoEncontrada />}/>
                </Routes>
                <Foot />
            </BrowserRouter>
        </ProdutoProvider>
    )
}

export default App;