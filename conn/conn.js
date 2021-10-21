const mongoose = require("mongoose");

const Conn = (url,user,pass,data) => {
   mongoose.connect(`${url}/${data}`, {
         user: user,
         pass: pass,
         useNewUrlParser: true,
         useUnifiedTopology: true,
      })
      .then(() => {
        console.log('MongoDB CONECTADO!')
      })
      .catch((err) => console.log('Erro no mongoo!!!!', err));
    }
    
    module.exports = Conn;