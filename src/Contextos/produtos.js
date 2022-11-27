// async function addProduto(newProduto) {
//     newProduto.price = parseFloat(newProduto.price)
//     newProduto.idCategoria = parseInt(newProduto.idCategoria)

//     await produtosService.addProduto(newProduto)
//     newProduto.id = produtos.length + 1
//     setProductos([...produtos, newProduto])
//     toast(`${newProduto.titulo} adicionado com sucesso`)
//     return newProduto
// }

// React.useEffect(() => {
//     getProdutos()
// }, [])

// return (
//     <ProdutosContext.Provider value={{ produtos, setProdutos, addProduto }}>
//         {children}
//     </ProdutosContext.Provider>
// )
// }


// export function useProdutosContext() {
// return React.useContext(ProdutosContext)
// }