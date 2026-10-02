import './categorias.css'

function Categorias() {
  return (
    <section className="categorias">
      <div className="categorias-cabecalho">
        <p>EXPLORA</p>
        <h2>Categorias</h2>
      </div>

      <div className="categorias-lista">
        <button>Moda</button>
        <button>Tecnologia</button>
        <button>Casa</button>
        <button>Beleza</button>
        <button>Gaming</button>
        <button>Desporto</button>
        <button>Acessórios</button>
        <button>Ver tudo</button>
      </div>
    </section>
  )
}

export default Categorias