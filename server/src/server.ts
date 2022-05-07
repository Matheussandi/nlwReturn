import express from 'express';
import { routes } from './routes';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
    console.log("Server running!")
});

// GET = Buscar informações
// POST = Cadastrar informações
// PUT = Atualizar informações
// PATCH = Atualizar informação única de uma entidade
// DELETE = deletrar uma informação