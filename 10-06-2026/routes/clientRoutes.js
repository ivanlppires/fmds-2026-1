import express from 'express';
const router = express.Router();

// Arquivo de roda para clientes /client

const dbClients = [];

/* FAZER UM CRUD */

// CREATE
router.post('/', (req, res) => {
    const data = req.body;
    dbClients.push(data)
    res.status(201).json({'message':`${data?.nome} cadastrado com sucesso`});
});
// READ
// UPDATE
// DELETE

export default router;
