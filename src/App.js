import CadastraProduto from 'components/AdicionarNovoProduto';
import IniciarSessao from 'components/IniciarSessão';
import './App.css';
import Banner from './components/Banner';
import Cabecalho from './components/Cabecalho';
import Foot from './components/Rodape';

function App() {
  return (
    <>
    <Cabecalho />
    <Banner />
    <IniciarSessao />
    <CadastraProduto />
    <Foot />
    </>
  )
}

export default App;
