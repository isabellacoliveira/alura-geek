import ProdutoCard from "components/ProdutoCard";
import ProdutosFiltrados from "components/ProdutosFiltrados";
import { ProdutoContext } from "Contextos/produtos";
import { useContext } from "react";

export default function SoConsoles(){
    const { arrayDosProdutos } = useContext(ProdutoContext);

    return (
        <>
         <ProdutosFiltrados />
         
        </>
       
    )
}