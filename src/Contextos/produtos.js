import produtos from 'json/produtos.json';
import ProdutoCard from "components/ProdutoCard";
import { createContext, useState } from "react";
export const ProdutoContext = createContext();
ProdutoContext.displayName = "Produto Cadastrado";


export default function ProdutoProvider({children}){
    const [imagem, setImagem ] = useState('');
    const [categoria, setCategoria ] = useState('');
    const [nomeProduto, setNomeProduto ] = useState('');
    const [preco, setPreco] = useState(''); 
    const [descricao, setDescricao ] = useState('');
    const [ arrayDosProdutos, setArrayDosProdutos ] = useState(produtos);

    function adicionaProduto(novoProduto){  
        novoProduto.id = arrayDosProdutos.length + 1
        setArrayDosProdutos([...arrayDosProdutos, novoProduto])
        return novoProduto
    }


    return(
        <>
        <ProdutoContext.Provider
            value={{
                arrayDosProdutos,
                setArrayDosProdutos, 
                nomeProduto,
                setNomeProduto
            }}
        >
            {children}

        </ProdutoContext.Provider>
        </>
        
    )
};