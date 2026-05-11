const express = require('express');
const router = express.Router();
const { Movimentacao } = require('../models');

// GET: Histórico de uma solicitação específica
router.get('/solicitacao/:id', async (req, res) => {
  try {
    const historico = await Movimentacao.findAll({ 
      where: { id_solicitacao: req.params.id },
      order: [['createdAt', 'DESC']]
    });
    res.json(historico);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST: Registrar nova movimentação (Log)
router.post('/', async (req, res) => {
  try {
    const log = await Movimentacao.create(req.body);
    res.status(201).json(log);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;