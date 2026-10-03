import { Link } from 'react-router-dom'
import { useCarrinho } from '../contextos/CarrinhoContext'
import Cabecalho from '../componentes/cabecalho'
import './carrinho.css'

function Carrinho() {
  const { carrinho, removerDoCarrinho } = useCarrinho()

  const total = carrinho.reduce((soma, produto) => {
    const preco = parseFloat(
      produto.preco
        .replace('€', '')
        .replace(',', '.')
        .trim()
    )

    return soma + preco
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

            <Link
              to="/loja"
              className="botao-continuar"
            >
              Explorar produtos
            </Link>
          </section>
        ) : (
          <section className="carrinho-conteudo">

            <div className="carrinho-produtos">

              {carrinho.map((produto, index) => (
                <article
                  className="carrinho-produto"
                  key={index}
                >

                  <div className="carrinho-produto-imagem">
                    {produto.imagem ? (
                      <img
                        src={produto.imagem}
                        alt={produto.nome}
                      />
                    ) : (
                      <span>{produto.emoji}</span>
                    )}
                  </div>

                  <div className="carrinho-produto-info">
                    <h2>{produto.nome}</h2>

                    <p>{produto.preco}</p>

                    <button
                      onClick={() => removerDoCarrinho(index)}
                    >
                      Remover
                    </button>
                  </div>

                </article>
              ))}

            </div>

            <aside className="carrinho-resumo">

              <h2>Resumo</h2>

              <div className="carrinho-total">
                <span>Total</span>

                <strong>
                  {total.toFixed(2).replace('.', ',')} €
                </strong>
              </div>

              <button className="botao-finalizar">
                Finalizar compra
              </button>

              <Link
                to="/loja"
                className="continuar-compras"
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