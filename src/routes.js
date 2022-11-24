import { BrowserRouter, Routes, Route } from "react-router-dom";
import Logando from "Paginas/Login";
import Cabecalho from "components/Cabecalho";
import PaginaPrincipal from "Paginas/PaginaPrincipal";
import Foot from "components/Rodape";
import TodosOsProdutos from "Paginas/TodosOsProdutos";
import CadastroProduto from "Paginas/CadastrarProduto";
import NaoEncontrada from "Paginas/NaoEcontrada";
import MensagemProvider from "Contextos/Mensagem";
import ProdutoClicado from "Paginas/ProdutoIndividual";

function App(){
    return (
        <BrowserRouter>
        <Cabecalho />
            <Routes>
                {/* <MensagemProvider> */}
                    <Route path="/" element={<PaginaPrincipal />}/>
                    <Route path="/home" element={<PaginaPrincipal />}/>
                    <Route path="/Login" element={<Logando />}/>
                    <Route path="/produtos" element={<TodosOsProdutos />}/>
                    <Route path="/cadastrarproduto" element={<CadastroProduto />}/>
                    <Route path="/produto" element={<ProdutoClicado />}/>
                    <Route path="*" element={<NaoEncontrada />}/>
                {/* </MensagemProvider> */}
            </Routes>
        <Foot />
        </BrowserRouter>
    )
}

export default App;