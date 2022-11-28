import produtos from 'json/produtos.json'
import { createContext, useContext, useEffect, useState } from "react";
export const CategoriasContext = createContext();
CategoriasContext.displayName = "Categoria Correspondente";


export default function CategoriaProvider({children}){
    const [ categoria, setCategoria ] = useState([]);
    const [ arrayDosProdutos, setArrayDosProdutos ] = useState(produtos);

    return(
      <CategoriasContext.Provider
        value={{
          categoria,
          setCategoria,
          arrayDosProdutos,
          setArrayDosProdutos
        }}
      >
        {children}
      </CategoriasContext.Provider>
    )
}



