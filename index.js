if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config();
  }


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

const db_url= process.env.DB_URL;
const db_user= process.env.DB_USER;
const db_pass= process.env.DB_PASS;
const db_data= process.env.DB_DATA;


Conn(db_url, db_user, db_pass, db_data);

app.use('/tarefas', TarefasRoutes);


const port = 3001;
app.listen(process.env.PORT || port, () => console.log(`App rodando em htttp://localhost:${port}/`));