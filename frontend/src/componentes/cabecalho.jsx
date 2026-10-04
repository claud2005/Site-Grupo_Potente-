import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useCarrinho } from '../contextos/CarrinhoContext'
import './cabecalho.css'

function Cabecalho() {
  const [pesquisa, setPesquisa] = useState('')

  const navigate = useNavigate()

  const { carrinho } = useCarrinho()

  function alterarPesquisa(evento) {
    const texto = evento.target.value

    setPesquisa(texto)

    if (texto.trim() === '') {
      navigate('/loja')
      return
    }

    navigate(`/loja?pesquisa=${encodeURIComponent(texto)}`)
  }

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
          value={pesquisa}
          onChange={alterarPesquisa}
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