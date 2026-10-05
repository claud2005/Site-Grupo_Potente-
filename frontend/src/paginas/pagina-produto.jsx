import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useCarrinho } from '../contextos/CarrinhoContext'
import Cabecalho from '../componentes/cabecalho'
import './pagina-produto.css'

function PaginaProduto() {
  const { id } = useParams()

  const { adicionarAoCarrinho } = useCarrinho()

  const [produto, setProduto] = useState(null)
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState(false)

  useEffect(() => {
    fetch(`http://localhost:5000/produtos/${id}`)
      .then((resposta) => {
        if (!resposta.ok) {
          throw new Error('Produto não encontrado')
        }

        return resposta.json()
      })
      .then((dados) => {
        setProduto(dados)
        setCarregando(false)
      })
      .catch((erro) => {
        console.error('Erro ao buscar produto:', erro)
        setErro(true)
        setCarregando(false)
      })
  }, [id])

  if (carregando) {
    return (
      <>
        <Cabecalho />

        <main className="produto-nao-encontrado">
          <h1>A carregar produto...</h1>
        </main>
      </>
    )
  }

  if (erro || !produto) {
    return (
      <>
        <Cabecalho />

        <main className="produto-nao-encontrado">
          <h1>Produto não encontrado</h1>

          <Link to="/loja">
            Voltar à loja
          </Link>
        </main>
      </>
    )
  }

  return (
    <>
      <Cabecalho />

      <main className="pagina-produto">

        <Link
          className="produto-voltar"
          to="/loja"
        >
          ← Voltar à loja
        </Link>

        <section className="produto-detalhe">

          <div className="produto-detalhe-imagem">

            {produto.imagem ? (
              <img
                src={produto.imagem}
                alt={produto.nome}
              />
            ) : (
              <span className="produto-sem-imagem">
                🛍️
              </span>
            )}

          </div>

          <div className="produto-detalhe-info">

            <p className="produto-categoria">
              CIPHER
            </p>

            <h1>
              {produto.nome}
            </h1>

            <p className="produto-preco">
              {parseFloat(produto.preco)
                .toFixed(2)
                .replace('.', ',')} €
            </p>

            <p className="produto-descricao">
              {produto.descricao}
            </p>

            <button
              className="botao-carrinho"
              onClick={() => adicionarAoCarrinho(produto)}
            >
              Adicionar ao carrinho
            </button>

          </div>

        </section>

      </main>
    </>
  )
}

export default PaginaProduto