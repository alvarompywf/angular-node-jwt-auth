import express from 'express';
import dotenv from 'dotenv';
import routes from './routes';
import { checktoken } from './auth/auth.middleware';
import {
  loginHandler,
  registerHandler,
  usersHandler,
} from './auth/auth.functions';

const app = express();

// Importar configuración del archivo .env
dotenv.config();

// Usar las rutas definidas en routes.js
app.use('/', routes);

// Definir las rutas específicas de autenticación

app.post('/api/login', loginHandler);
app.post('/api/register', registerHandler);
app.get('/api/users', checktoken, usersHandler);

const port = process.env.PORT || 3333;

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

server.on('error', console.error);
