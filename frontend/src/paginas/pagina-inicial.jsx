import Cabecalho from '../componentes/cabecalho'
import Categorias from '../componentes/categorias'
import Produtos from '../componentes/produtos'
import './pagina-inicial.css'

function PaginaInicial() {
  return (
    <>
      <Cabecalho />

      <main>
        <section className="destaque-principal">
          <p className="destaque-pequeno">BEM-VINDO À CIPHER</p>

          <h2>
            Descobre.
            <br />
            Escolhe.
            <br />
            Vive.
          </h2>

          <p className="destaque-descricao">
            Milhares de produtos. Uma nova forma de comprar.
          </p>

          <button className="botao-destaque">
            Explorar produtos
          </button>
        </section>

        <Categorias />

        <Produtos />
      </main>
    </>
  )
}

export default PaginaInicial