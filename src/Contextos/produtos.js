import categoriasJson from 'json/categorias.json'; 
import produtos from 'json/produtos.json';
import { createContext, useState } from "react";
export const ProdutoContext = createContext();
ProdutoContext.displayName = "Produtos Cadastrado";


export default function ProdutoProvider({children}){
    const [arrayDosProdutos, setArrayDosProdutos] = useState(produtos);
    const [categorias, setCategorias] = useState(categoriasJson);

    function adicionaProduto(novoProduto){  
        novoProduto.IDcategoria = parseInt(novoProduto.IDcategoria);
        novoProduto.id = arrayDosProdutos.length + 1
        setArrayDosProdutos([...arrayDosProdutos, novoProduto])
        return novoProduto
    }

    return (
        <ProdutoContext.Provider
            value={{
                arrayDosProdutos,
                setArrayDosProdutos, 
                adicionaProduto,
                categorias
            }}
        >
            {children}

        </ProdutoContext.Provider>
    )
};