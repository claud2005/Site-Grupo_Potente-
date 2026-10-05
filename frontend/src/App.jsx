import { BrowserRouter, Routes, Route } from 'react-router-dom'

import PaginaInicial from './paginas/pagina-inicial'
import Loja from './paginas/loja'
import PaginaProduto from './paginas/pagina-produto'
import Carrinho from './paginas/carrinho'
import Entrar from './paginas/entrar'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<PaginaInicial />}
        />

        <Route
          path="/loja"
          element={<Loja />}
        />

        <Route
          path="/produto/:id"
          element={<PaginaProduto />}
        />

        <Route
          path="/carrinho"
          element={<Carrinho />}
        />

        <Route
          path="/entrar"
          element={<Entrar />}
        />

      </Routes>
    </BrowserRouter>
  )
}

export default App