const express = require('express');
const router = express.Router();
const { Solicitacao, Requerente } = require('../models');

// GET: Listar TODAS as solicitações (Para o Dashboard do Operador)
router.get('/', async (req, res) => {
  try {
    const lista = await Solicitacao.findAll({ include: ['requerente'] });
    res.json(lista);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET: Buscar por PROTOCOLO (Para o Acompanhamento do Cidadão)
router.get('/buscar/:protocolo', async (req, res) => {
  try {
    const solicitacao = await Solicitacao.findOne({ 
      where: { id_requerente: req.params.protocolo },
      include: ['requerente']
    });
    if (!solicitacao) return res.status(404).json({ message: "Protocolo não encontrado" });
    res.json(solicitacao);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT: Atualizar STATUS (Para o Operador mudar para 'Em Análise', etc)
router.put('/:id/status', async (req, res) => {
  try {
    const { status_atual } = req.body;
    await Solicitacao.update({ status_atual }, { where: { id: req.params.id } });
    res.json({ message: "Status atualizado com sucesso!" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// POST: Criar nova solicitação
router.post('/', async (req, res) => {
  try {
    const nova = await Solicitacao.create(req.body);
    res.status(201).json(nova);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;