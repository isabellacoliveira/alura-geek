import { createContext, useState } from 'react';

export const MensagemFaleConoscoContext = createContext();
MensagemFaleConoscoContext.displayName = "Mensagem"

export default function MensagemProvider({ children }) {
     const [nome, setNome] = useState('');
     const [mensagem, setMensagem] = useState('');
  return (
    <>
    <MensagemFaleConoscoContext.Provider
      value={{
        nome,
        setNome,
        mensagem,
        setMensagem
      }}
    >
      testando tudo
    </MensagemFaleConoscoContext.Provider>
    </>
    
  )
}