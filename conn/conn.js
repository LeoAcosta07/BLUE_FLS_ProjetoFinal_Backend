const mongoose = require('mongoose');

const Conn = () => {
    mongoose.connect('mongodb+srv://dbUser:vJat44KTCA6D09Za@cluster0.i426i.mongodb.net/myTarefas?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }).then(() => {
        console.log('MongoDB CONECTADO!')
      }).catch((err) => console.log('Erro no mongoo', err));
    }
    
    module.exports = Conn;