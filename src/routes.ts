import { Router } from 'express';
import { validarPosto } from './controllers/postoController';

const routes = Router();

// Definindo a rota e o controlador
routes.get('/validar-posto/:cnpj', validarPosto);

export default routes;
