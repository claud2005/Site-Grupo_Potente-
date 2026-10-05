require('dotenv').config()

const express = require('express')
const cors = require('cors')
const { Pool } = require('pg')

const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
})

app.get('/', (req, res) => {
  res.send('Backend está a funcionar!')
})

app.get('/teste-base-dados', async (req, res) => {
  try {
    const resultado = await pool.query('SELECT NOW()')

    res.json({
      mensagem: 'Ligação à base de dados funcionando!',
      data: resultado.rows[0].now,
    })
  } catch (erro) {
    console.error('Erro ao ligar à base de dados:', erro)

    res.status(500).json({
      mensagem: 'Erro ao ligar à base de dados.',
    })
  }
})

app.get('/produtos', async (req, res) => {
  try {
    const resultado = await pool.query(
      'SELECT * FROM produtos ORDER BY id ASC'
    )

    res.json(resultado.rows)
  } catch (erro) {
    console.error('Erro ao buscar produtos:', erro)

    res.status(500).json({
      mensagem: 'Erro ao buscar produtos da base de dados.',
    })
  }
})

app.get('/produtos/:id', async (req, res) => {
  try {
    const { id } = req.params

    const resultado = await pool.query(
      'SELECT * FROM produtos WHERE id = $1',
      [id]
    )

    if (resultado.rows.length === 0) {
      return res.status(404).json({
        mensagem: 'Produto não encontrado.'
      })
    }

    res.json(resultado.rows[0])
  } catch (erro) {
    console.error('Erro ao buscar produto:', erro)

    res.status(500).json({
      mensagem: 'Erro ao buscar produto.'
    })
  }
})

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})