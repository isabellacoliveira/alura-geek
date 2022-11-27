// import React from 'react';

// import productsService from 'services/productsService';

// const CategoriasContext = React.createContext()
// CategoriasContext.displayName = 'Categorias'

// export const CategoriasProvider = ({ children }) => {
//     const [categorias, setCategorias] = React.useState([])

//     async function getCategorias() {
//         try {
//             const { data } = await productsService.getCategorias()
//             setCategorias(data)
//         } catch (error) {
//         }
//     }

//     React.useEffect(() => {
//         getCategorias()
//     }, [])

//     return (
//         <CategoriasContext.Provider value={{ categorias, setCategorias }}>
//             {children}
//         </CategoriasContext.Provider>
//     )
// }

// export function useCategoriasContext() {
//     return React.useContext(CategoriasContext)
// }