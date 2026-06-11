import express from 'express';
import * as clientController from '../controllers/clientController.js'


const router = express.Router();

// Rotas de /client

// Create
router.post('/', clientController.addClient);

// Read All
router.get('/', clientController.getClients)

// Read One
router.get('/:id', clientController.getClient);

// UPDATE
router.put('/:id', clientController.updateClient);

// DELETE
router.delete('/:id', clientController.deleteClient);

export default router;
