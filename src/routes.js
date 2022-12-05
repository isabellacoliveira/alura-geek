import { BrowserRouter, Routes, Route } from "react-router-dom";
import Logando from "Paginas/Login";
import PaginaPrincipal from "Paginas/PaginaPrincipal";
import TodosOsProdutos from "Paginas/TodosOsProdutos";
import CadastroProduto from "Paginas/CadastrarProduto";
import NaoEncontrada from "Paginas/NaoEcontrada";
import ProdutoSelecionado from "Paginas/ProdutoIndividual";
import ScrollToTop from "components/ScrollToTop";
import  ProdutoProvider from "Contextos/produtos";
import Entrar from "Paginas/Entrar";
import Cadastro from "Paginas/Cadastro";

function App(){
    return (
        <ProdutoProvider>
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route path="/" exact element={<Entrar />}/>
                    <Route path="/home" element={<PaginaPrincipal />}/>
                    <Route path="/Login" element={<Logando />}/>
                    <Route path="/produtos" element={<TodosOsProdutos />}/>
                    <Route path="/cadastrarproduto" element={<CadastroProduto />}/>
                    <Route path="/produto/:id/*" element={<ProdutoSelecionado />}/>
                    <Route path="/cadastro" element={<Cadastro />}/>
                    <Route path="*" element={<NaoEncontrada />}/>
                </Routes>
            </BrowserRouter>
        </ProdutoProvider>
    )
}

export default App;