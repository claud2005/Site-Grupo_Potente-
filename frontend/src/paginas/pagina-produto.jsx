import { useParams, Link } from 'react-router-dom'
import { useCarrinho } from '../contextos/CarrinhoContext'
import Cabecalho from '../componentes/cabecalho'
import './pagina-produto.css'

const produtos = {
  'cipher-air-pro': {
    nome: 'CIPHER Air Pro',
    preco: '29,99 €',
    imagem: '/imagens/cipher-air-pro.png',
    descricao:
      'Um produto pensado para quem procura qualidade, simplicidade e um design moderno.'
  },

  'urban-essential-hoodie': {
    nome: 'Urban Essential Hoodie',
    preco: '34,99 €',
    emoji: '👕',
    descricao:
      'Uma peça essencial para o dia a dia, com um estilo simples e confortável.'
  },

  'cipher-mechanical-x': {
    nome: 'CIPHER Mechanical X',
    preco: '59,99 €',
    emoji: '⌨️',
    descricao:
      'Teclado mecânico desenvolvido para uma experiência confortável e precisa.'
  },

  'glow-smart-lamp': {
    nome: 'Glow Smart Lamp',
    preco: '24,99 €',
    emoji: '💡',
    descricao:
      'Uma iluminação moderna para dar um novo ambiente ao teu espaço.'
  }
}

function PaginaProduto() {
  const { id } = useParams()
  const { adicionarAoCarrinho } = useCarrinho()

  const produto = produtos[id]

  if (!produto) {
    return (
      <>
        <Cabecalho />

        <main className="produto-nao-encontrado">
          <h1>Produto não encontrado</h1>

          <Link to="/loja">
            Voltar à loja
          </Link>
        </main>
      </>
    )
  }

  return (
    <>
      <Cabecalho />

      <main className="pagina-produto">
        <Link
          className="produto-voltar"
          to="/loja"
        >
          ← Voltar à loja
        </Link>

        <section className="produto-detalhe">

          <div className="produto-detalhe-imagem">
            {produto.imagem ? (
              <img
                src={produto.imagem}
                alt={produto.nome}
              />
            ) : (
              <span>{produto.emoji}</span>
            )}
          </div>

          <div className="produto-detalhe-info">

            <p className="produto-categoria">
              CIPHER
            </p>

            <h1>
              {produto.nome}
            </h1>

            <p className="produto-preco">
              {produto.preco}
            </p>

            <p className="produto-descricao">
              {produto.descricao}
            </p>

            <button
              className="botao-carrinho"
              onClick={() => adicionarAoCarrinho(produto)}
            >
              Adicionar ao carrinho
            </button>

          </div>

        </section>
      </main>
    </>
  )
}

export default PaginaProduto