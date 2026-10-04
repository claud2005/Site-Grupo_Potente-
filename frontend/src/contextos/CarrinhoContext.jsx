import { createContext, useContext, useState } from 'react'

const CarrinhoContext = createContext()

export function CarrinhoProvider({ children }) {
  const [carrinho, setCarrinho] = useState([])

  function adicionarAoCarrinho(produto) {
    setCarrinho((carrinhoAtual) => {
      const produtoExistente = carrinhoAtual.find(
        (item) => item.nome === produto.nome
      )

      if (produtoExistente) {
        return carrinhoAtual.map((item) =>
          item.nome === produto.nome
            ? {
                ...item,
                quantidade: item.quantidade + 1
              }
            : item
        )
      }

      return [
        ...carrinhoAtual,
        {
          ...produto,
          quantidade: 1
        }
      ]
    })
  }

  function aumentarQuantidade(nome) {
    setCarrinho((carrinhoAtual) =>
      carrinhoAtual.map((produto) =>
        produto.nome === nome
          ? {
              ...produto,
              quantidade: produto.quantidade + 1
            }
          : produto
      )
    )
  }

  function diminuirQuantidade(nome) {
    setCarrinho((carrinhoAtual) =>
      carrinhoAtual
        .map((produto) =>
          produto.nome === nome
            ? {
                ...produto,
                quantidade: produto.quantidade - 1
              }
            : produto
        )
        .filter((produto) => produto.quantidade > 0)
    )
  }

  function removerDoCarrinho(nome) {
    setCarrinho((carrinhoAtual) =>
      carrinhoAtual.filter((produto) => produto.nome !== nome)
    )
  }

  return (
    <CarrinhoContext.Provider
      value={{
        carrinho,
        adicionarAoCarrinho,
        aumentarQuantidade,
        diminuirQuantidade,
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