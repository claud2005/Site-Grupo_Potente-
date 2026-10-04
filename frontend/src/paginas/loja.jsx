import { Link, useSearchParams } from 'react-router-dom'
import Cabecalho from '../componentes/cabecalho'
import './loja.css'

const produtos = [
  {
    id: 'cipher-air-pro',
    nome: 'CIPHER Air Pro',
    preco: '29,99 €',
    imagem: '/imagens/cipher-air-pro.png',
    categoria: 'Tecnologia',
  },
  {
    id: 'urban-essential-hoodie',
    nome: 'Urban Essential Hoodie',
    preco: '34,99 €',
    emoji: '👕',
    categoria: 'Moda',
  },
  {
    id: 'cipher-mechanical-x',
    nome: 'CIPHER Mechanical X',
    preco: '59,99 €',
    emoji: '⌨️',
    categoria: 'Tecnologia',
  },
  {
    id: 'glow-smart-lamp',
    nome: 'Glow Smart Lamp',
    preco: '24,99 €',
    emoji: '💡',
    categoria: 'Casa',
  },
]

function Loja() {
  const [searchParams] = useSearchParams()

  const pesquisa = searchParams.get('pesquisa') || ''
  const categoria = searchParams.get('categoria') || ''

  const produtosFiltrados = produtos.filter((produto) => {
    const correspondePesquisa =
      produto.nome
        .toLowerCase()
        .includes(pesquisa.toLowerCase())

    const correspondeCategoria =
      categoria === '' ||
      produto.categoria === categoria

    return correspondePesquisa && correspondeCategoria
  })

  return (
    <>
      <Cabecalho />

      <main className="pagina-produtos">
        <section className="produtos-intro">
          <p>LOJA CIPHER</p>

          <h1>
            {pesquisa
              ? `Resultados para "${pesquisa}"`
              : categoria
                ? categoria
                : 'Todos os produtos.'}
          </h1>

          <span>
            {pesquisa || categoria
              ? `${produtosFiltrados.length} produto(s) encontrado(s).`
              : 'Descobre a nossa seleção de produtos.'}
          </span>
        </section>

        {produtosFiltrados.length > 0 ? (
          <section className="produtos-grelha">

            {produtosFiltrados.map((produto) => (
              <Link
                key={produto.id}
                to={`/produto/${produto.id}`}
                className="produto-card"
              >
                <div className="produto-card-imagem">
                  {produto.imagem ? (
                    <img
                      src={produto.imagem}
                      alt={produto.nome}
                    />
                  ) : (
                    <span className="produto-card-emoji">
                      {produto.emoji}
                    </span>
                  )}
                </div>

                <div className="produto-card-info">
                  <h2>{produto.nome}</h2>
                  <p>{produto.preco}</p>
                </div>
              </Link>
            ))}

          </section>
        ) : (
          <section className="produtos-sem-resultados">
            <h2>Nenhum produto encontrado.</h2>

            <p>
              Experimenta pesquisar por outro nome ou categoria.
            </p>

            <Link to="/loja">
              Ver todos os produtos
            </Link>
          </section>
        )}
      </main>
    </>
  )
}

export default Loja