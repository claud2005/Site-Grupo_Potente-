import { createContext, useContext, useState } from 'react'

const CarrinhoContext = createContext()

export function CarrinhoProvider({ children }) {
  const [carrinho, setCarrinho] = useState([])

  function adicionarAoCarrinho(produto) {
    setCarrinho((carrinhoAtual) => [
      ...carrinhoAtual,
      produto
    ])
  }

  function removerDoCarrinho(index) {
    setCarrinho((carrinhoAtual) =>
      carrinhoAtual.filter((_, i) => i !== index)
    )
  }

  return (
    <CarrinhoContext.Provider
      value={{
        carrinho,
        adicionarAoCarrinho,
        removerDoCarrinho
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  )
}

export function useCarrinho() {
  return useContext(CarrinhoContext)
}