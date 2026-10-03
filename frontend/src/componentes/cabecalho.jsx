import { Link } from 'react-router-dom'
import { useCarrinho } from '../contextos/CarrinhoContext'
import './cabecalho.css'

function Cabecalho() {
  const { carrinho } = useCarrinho()

  return (
    <header className="cabecalho">
      <div>
        <Link to="/" className="logo-cipher">
          <h1>CIPHER</h1>
        </Link>
      </div>

      <div>
        <input
          type="text"
          placeholder="Pesquisar produtos..."
        />
      </div>

      <div>
        <button>Entrar</button>

        <Link
          to="/carrinho"
          className="botao-carrinho-header"
        >
          🛒 Carrinho
          {carrinho.length > 0 && (
            <span className="contador-carrinho">
              {carrinho.length}
            </span>
          )}
        </Link>
      </div>
    </header>
  )
}

export default Cabecalho