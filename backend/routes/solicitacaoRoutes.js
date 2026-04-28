// backend/routes/solicitacaoRoutes.js
const express = require('express');
const router = express.Router();
const { Solicitacao } = require('../models'); // Verifique se este caminho está certo!

router.get('/buscar/:id', async (req, res) => {
    try {
      const solicitacao = await Solicitacao.findOne({ 
        where: { id_requerente: req.params.id } 
      });
      
      if (solicitacao) {
        res.json(solicitacao);
      } else {
        // É aqui que ele está caindo agora porque o CPF não existe no banco
        res.status(404).json({ message: "Solicitação não encontrada" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });


  router.post('/', async (req, res) => {
    console.log("Dados recebidos no Back:", req.body); // <--- ADICIONE ISSO
    try {
      const nova = await Solicitacao.create(req.body);
      res.status(201).json(nova);
    } catch (error) {
      console.error("Erro no Sequelize:", error); // <--- E ISSO
      res.status(400).json({ error: error.message });
    }
  });

  module.exports = router; // NÃO ESQUEÇA DISSO NO FINAL DO ARQUIVO!