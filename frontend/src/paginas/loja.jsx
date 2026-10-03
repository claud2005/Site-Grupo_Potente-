import Cabecalho from '../componentes/cabecalho'
import './loja.css'

function Loja() {
  return (
    <>
      <Cabecalho />

      <main className="pagina-produtos">
        <section className="produtos-intro">
          <p>LOJA CIPHER</p>

          <h1>Todos os produtos.</h1>

          <span>
            Descobre a nossa seleção de produtos.
          </span>
        </section>

        <section className="produtos-grelha">
          <article className="produto-card">
            <div className="produto-card-imagem">
              <img
                src="/imagens/cipher-air-pro.png"
                alt="CIPHER Air Pro"
              />
            </div>

            <div className="produto-card-info">
              <h2>CIPHER Air Pro</h2>
              <p>149,99 €</p>
            </div>
          </article>
        </section>
      </main>
    </>
  )
}

export default Loja