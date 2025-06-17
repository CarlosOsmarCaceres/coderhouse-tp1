import express from 'express';
import productsRouter from './routes/products.routes.js';
import cartsRouter from './routes/carts.routes.js';

const app = express();

// Middleware para leer JSON
app.use(express.json());

// Rutas
app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);

// Levantar servidor
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
});
