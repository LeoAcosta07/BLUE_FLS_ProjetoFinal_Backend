const mongoose = require('mongoose');

const Conn = () => {
    mongoose.connect('mongodb://localhost:27017/myTarefas', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }).then(() => {
        console.log('MongoDB CONECTADO!')
      }).catch((err) => console.log('Erro no mongoo', err));
    }
    
    module.exports = Conn;