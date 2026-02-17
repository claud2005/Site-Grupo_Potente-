// Importar pacotes
const express = require('express');
const cors = require('cors');

// Criar aplicação
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Rota de teste
app.get('/', (req, res) => {
  res.send('Backend está a funcionar!');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
