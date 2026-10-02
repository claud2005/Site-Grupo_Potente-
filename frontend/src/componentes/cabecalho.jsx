import './cabecalho.css'

function Cabecalho() {
  return (
    <header className="cabecalho">
      <div>
        <h1>CIPHER</h1>
      </div>

      <div>
        <input
          type="text"
          placeholder="Pesquisar produtos..."
        />
      </div>

      <div>
        <button>Entrar</button>
        <button>🛒 Carrinho</button>
      </div>
    </header>
  )
}

export default Cabecalho