import { Link } from 'react-router-dom'
import Cabecalho from '../componentes/cabecalho'
import { useCarrinho } from '../contextos/CarrinhoContext'
import './carrinho.css'

function Carrinho() {
  const {
    carrinho,
    aumentarQuantidade,
    diminuirQuantidade,
    removerDoCarrinho
  } = useCarrinho()

  const total = carrinho.reduce((soma, produto) => {
    const preco = parseFloat(
      produto.preco
        .replace('€', '')
        .replace(',', '.')
        .trim()
    )

    return soma + preco * produto.quantidade
  }, 0)

  return (
    <>
      <Cabecalho />

      <main className="pagina-carrinho">
        <section className="carrinho-intro">
          <p>CIPHER</p>

          <h1>O teu carrinho.</h1>

          <span>
            Consulta os produtos que adicionaste.
          </span>
        </section>

        {carrinho.length === 0 ? (
          <section className="carrinho-vazio">
            <h2>O teu carrinho está vazio.</h2>

            <p>
              Ainda não adicionaste nenhum produto.
            </p>

            <Link to="/loja">
              Continuar a comprar
            </Link>
          </section>
        ) : (
          <section className="carrinho-conteudo">

            <div className="carrinho-produtos">

              {carrinho.map((produto) => (
                <article
                  className="item-carrinho"
                  key={produto.nome}
                >
                  <div className="item-carrinho-imagem">
                    {produto.imagem ? (
                      <img
                        src={produto.imagem}
                        alt={produto.nome}
                      />
                    ) : (
                      <span>{produto.emoji}</span>
                    )}
                  </div>

                  <div className="item-carrinho-info">
                    <h2>{produto.nome}</h2>

                    <p>{produto.preco}</p>

                    <div className="quantidade">

                      <button
                        onClick={() =>
                          diminuirQuantidade(produto.nome)
                        }
                      >
                        −
                      </button>

                      <span>
                        {produto.quantidade}
                      </span>

                      <button
                        onClick={() =>
                          aumentarQuantidade(produto.nome)
                        }
                      >
                        +
                      </button>

                    </div>

                    <button
                      className="remover-produto"
                      onClick={() =>
                        removerDoCarrinho(produto.nome)
                      }
                    >
                      Remover
                    </button>
                  </div>
                </article>
              ))}

            </div>

            <aside className="resumo-carrinho">
              <h2>Resumo</h2>

              <div className="linha-resumo">
                <span>Total</span>

                <strong>
                  {total.toFixed(2).replace('.', ',')} €
                </strong>
              </div>

              <button className="botao-finalizar">
                Finalizar compra
              </button>

              <Link
                className="continuar-compras"
                to="/loja"
              >
                Continuar a comprar
              </Link>
            </aside>

          </section>
        )}
      </main>
    </>
  )
}

export default Carrinho