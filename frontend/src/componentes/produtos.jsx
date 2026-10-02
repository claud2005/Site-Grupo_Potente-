import './produtos.css'

function Produtos() {
  return (
    <section className="produtos">
      <div className="produtos-cabecalho">
        <p>DESCOBRE</p>

        <h2>Produtos em destaque</h2>

        <span>
          Uma seleção de produtos para começar a explorar a CIPHER.
        </span>
      </div>

      <div className="produtos-lista">

        <article className="produto">
          <div className="produto-imagem">
            <img src="/imagens/cipher-air-pro.png" alt="CIPHER Air Pro" />
        </div>

          <div className="produto-informacao">
            <h3>CIPHER Air Pro</h3>
            <p>29,99 €</p>
          </div>
        </article>

        <article className="produto">
          <div className="produto-imagem">
            👕
          </div>

          <div className="produto-informacao">
            <h3>Urban Essential Hoodie</h3>
            <p>34,99 €</p>
          </div>
        </article>

        <article className="produto">
          <div className="produto-imagem">
            ⌨️
          </div>

          <div className="produto-informacao">
            <h3>CIPHER Mechanical X</h3>
            <p>59,99 €</p>
          </div>
        </article>

        <article className="produto">
          <div className="produto-imagem">
            💡
          </div>

          <div className="produto-informacao">
            <h3>Glow Smart Lamp</h3>
            <p>24,99 €</p>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Produtos