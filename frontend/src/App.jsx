import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PaginaInicial from './paginas/pagina-inicial'
import Loja from './paginas/loja'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="/loja" element={<Loja />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App