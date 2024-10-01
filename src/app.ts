import express from 'express';
import routes from './routes';

const app = express();
const port = 3000;

// Middleware para usar JSON
app.use(express.json());

// Usando as rotas definidas em 'routes.ts'
app.use(routes);

// Iniciando o servidor
app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`);
});
