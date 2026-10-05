import { Link } from 'react-router-dom'
import Cabecalho from '../componentes/cabecalho'
import './entrar.css'

function Entrar() {
  return (
    <>
      <Cabecalho />

      <main className="pagina-entrar">

        <section className="entrar-caixa">

          <div className="entrar-intro">
            <p>CIPHER</p>

            <h1>Bem-vindo de volta.</h1>

            <span>
              Entra na tua conta para continuares.
            </span>
          </div>

          <form className="formulario-entrar">

            <div className="campo-entrar">
              <label htmlFor="email">
                Email
              </label>

              <input
                id="email"
                type="email"
                placeholder="O teu email"
              />
            </div>

            <div className="campo-entrar">
              <label htmlFor="password">
                Palavra-passe
              </label>

              <input
                id="password"
                type="password"
                placeholder="A tua palavra-passe"
              />
            </div>

            <button
              type="submit"
              className="botao-entrar"
            >
              Entrar
            </button>

          </form>

          <div className="entrar-registo">
            <p>
              Ainda não tens uma conta?
            </p>

            <Link to="/registar">
              Criar conta
            </Link>
          </div>

        </section>

      </main>
    </>
  )
}

export default Entrar