import express from 'express';
import cors from 'cors';
import clientRouter from './routes/clientRoutes.js'

const app = express();
app.use(cors());

// use = aplicar um middleware no endpoint
app.use(express.json())

app.use('/client', clientRouter);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});