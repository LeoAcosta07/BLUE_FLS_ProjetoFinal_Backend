// importar o express
const express = require('express');
// importar a biblioteca mongoonse que sera responsavel pelo mongodb (banco de dados)
const mongoose = require('mongoose');

const cors = require('cors');

const Tarefa = require('./models/tarefas');

const TarefasRoutes = require('./routes/tarefas.routes');
const Conn = require('./conn/conn');

// inicializa o express
const app = express();
app.use(cors());
app.use(express.json());

Conn();

app.use('/tarefas', TarefasRoutes);


const port = 3001;
app.listen(port, () => {
  console.log(`App rodando em htttp://localhost:${port}/`);
})