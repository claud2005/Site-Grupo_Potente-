import { Link, useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Cabecalho from '../componentes/cabecalho'
import './loja.css'

function Loja() {
  const [searchParams] = useSearchParams()

  const pesquisa = searchParams.get('pesquisa') || ''

  const [produtos, setProdutos] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState(false)

  useEffect(() => {
    fetch('http://localhost:5000/produtos')
      .then((resposta) => {
        if (!resposta.ok) {
          throw new Error('Erro ao buscar produtos')
        }

        return resposta.json()
      })
      .then((dados) => {
        setProdutos(dados)
        setCarregando(false)
      })
      .catch((erro) => {
        console.error('Erro ao buscar produtos:', erro)
        setErro(true)
        setCarregando(false)
      })
  }, [])

  const produtosFiltrados = produtos.filter((produto) =>
    produto.nome
      .toLowerCase()
      .includes(pesquisa.toLowerCase())
  )

  return (
    <>
      <Cabecalho />

      <main className="pagina-produtos">

        <section className="produtos-intro">
          <p>LOJA CIPHER</p>

          <h1>
            {pesquisa
              ? `Resultados para "${pesquisa}"`
              : 'Todos os produtos.'}
          </h1>

          <span>
            {pesquisa
              ? `${produtosFiltrados.length} produto(s) encontrado(s).`
              : 'Descobre a nossa seleção de produtos.'}
          </span>
        </section>

        {carregando && (
          <section className="produtos-sem-resultados">
            <h2>A carregar produtos...</h2>
          </section>
        )}

        {!carregando && erro && (
          <section className="produtos-sem-resultados">
            <h2>Não foi possível carregar os produtos.</h2>

            <p>
              Verifica se o servidor está a funcionar.
            </p>
          </section>
        )}

        {!carregando &&
          !erro &&
          produtosFiltrados.length > 0 && (
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
                        🛍️
                      </span>
                    )}

                  </div>

                  <div className="produto-card-info">

                    <h2>{produto.nome}</h2>

                    <p>
                      {parseFloat(produto.preco)
                        .toFixed(2)
                        .replace('.', ',')} €
                    </p>

                  </div>

                </Link>
              ))}

            </section>
          )}

        {!carregando &&
          !erro &&
          produtosFiltrados.length === 0 && (
            <section className="produtos-sem-resultados">

              <h2>Nenhum produto encontrado.</h2>

              <p>
                Experimenta pesquisar por outro nome.
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