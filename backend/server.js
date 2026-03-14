const express = require('express');
const cors = require('cors');
const { Sequelize } = require('sequelize');
const config = require('./config/config.json').development;

const app = express();
app.use(cors());
app.use(express.json());

// Teste de conexão com o Banco de Dados (Docker)
const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect
});

app.get('/api/test', async (req, res) => {
  try {
    await sequelize.authenticate();
    res.json({ message: "Backend e Banco de Dados (Docker) conectados com sucesso!" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao conectar no banco", error: error.message });
  }
});

app.listen(3001, () => console.log('Servidor rodando na porta 3001'));