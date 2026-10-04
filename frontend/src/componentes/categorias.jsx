import { useNavigate } from 'react-router-dom'
import './categorias.css'

function Categorias() {
  const navigate = useNavigate()

  function escolherCategoria(categoria) {
    navigate(`/loja?categoria=${encodeURIComponent(categoria)}`)
  }

  return (
    <section className="categorias">
      <div className="categorias-cabecalho">
        <p>EXPLORA</p>
        <h2>Categorias</h2>
      </div>

      <div className="categorias-lista">
        <button onClick={() => escolherCategoria('Moda')}>
          Moda
        </button>

        <button onClick={() => escolherCategoria('Tecnologia')}>
          Tecnologia
        </button>

        <button onClick={() => escolherCategoria('Casa')}>
          Casa
        </button>

        <button onClick={() => escolherCategoria('Beleza')}>
          Beleza
        </button>

        <button onClick={() => escolherCategoria('Gaming')}>
          Gaming
        </button>

        <button onClick={() => escolherCategoria('Desporto')}>
          Desporto
        </button>

        <button onClick={() => escolherCategoria('Acessórios')}>
          Acessórios
        </button>

        <button onClick={() => navigate('/loja')}>
          Ver tudo
        </button>
      </div>
    </section>
  )
}

export default Categorias