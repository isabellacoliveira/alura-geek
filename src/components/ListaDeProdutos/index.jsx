// import styled from 'styled-components'; 
// import ProdutoCard from 'components/ProdutoCard';
// import { Link, useLocation } from "react-router-dom";
// import BotaoLogin from 'components/BotaoDeLogin';



// export default function ListaDeProdutosFiltrados(){
//     // const {pathname} = useLocation(); 
  


//     return(
//         <>
      
        

//     <Cima>
//         <Titulos>Consoles</Titulos>
//             <Link to="/produtos" className="BotaoVerTudo">
//                 Ver tudo
//                 <img src={IconeSeta} />
//             </Link>
//         </Cima>

//         <ListaDeProdutos>
//          {produtos.map((produto) => (
//                 <li key={produto.id}>
//                     {produto.categoria === "consoles" ?
//                             <ProdutoCard produto={produto} /> 
//                             : null}
//                 </li>
                
//             ))}
//     </ListaDeProdutos>

//     <Cima>
//         <Titulos>Diversos</Titulos>
//             <Link to="/produtos" className="BotaoVerTudo">
//                 Ver tudo
//                 <img src={IconeSeta} />
//             </Link>
//         </Cima>

//     <ListaDeProdutos>
//          {produtos.map((produto) => (
//                 <li key={produto.id}>
//                     {produto.categoria === "diversos" ?
//                             <ProdutoCard produto={produto} /> 
//                             : null}
//                 </li>
                
//             ))}
//     </ListaDeProdutos>
//         </>
//     )
// }