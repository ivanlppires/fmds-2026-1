import express from 'express';
import clientRouter from './routes/clientRoutes.js'
import productRouter from './routes/productRoutes.js'

const app = express();

// use = aplicar um middleware no endpoint
app.use(express.json())

app.use('/client', clientRouter);
app.user('/product', productRouter)

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});