const express = require('express');
const router = express.Router();
const { Requerente } = require('../models');

// GET: Buscar por CPF (Para verificar se o usuário já existe)
router.get('/cpf/:cpf', async (req, res) => {
  try {
    const requerente = await Requerente.findOne({ where: { cpf: req.params.cpf } });
    if (!requerente) return res.status(404).json({ message: "CPF não cadastrado" });
    res.json(requerente);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST: Criar novo requerente
router.post('/', async (req, res) => {
  try {
    const novo = await Requerente.create(req.body);
    res.status(201).json(novo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;