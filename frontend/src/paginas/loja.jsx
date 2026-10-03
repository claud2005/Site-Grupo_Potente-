import { Link } from 'react-router-dom'
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

          <Link
            to="/produto/cipher-air-pro"
            className="produto-card"
          >
            <div className="produto-card-imagem">
              <img
                src="/imagens/cipher-air-pro.png"
                alt="CIPHER Air Pro"
              />
            </div>

            <div className="produto-card-info">
              <h2>CIPHER Air Pro</h2>
              <p>29,99 €</p>
            </div>
          </Link>

          <Link
            to="/produto/urban-essential-hoodie"
            className="produto-card"
          >
            <div className="produto-card-imagem produto-card-emoji">
              👕
            </div>

            <div className="produto-card-info">
              <h2>Urban Essential Hoodie</h2>
              <p>34,99 €</p>
            </div>
          </Link>

          <Link
            to="/produto/cipher-mechanical-x"
            className="produto-card"
          >
            <div className="produto-card-imagem produto-card-emoji">
              ⌨️
            </div>

            <div className="produto-card-info">
              <h2>CIPHER Mechanical X</h2>
              <p>59,99 €</p>
            </div>
          </Link>

          <Link
            to="/produto/glow-smart-lamp"
            className="produto-card"
          >
            <div className="produto-card-imagem produto-card-emoji">
              💡
            </div>

            <div className="produto-card-info">
              <h2>Glow Smart Lamp</h2>
              <p>24,99 €</p>
            </div>
          </Link>

        </section>
      </main>
    </>
  )
}

export default Loja