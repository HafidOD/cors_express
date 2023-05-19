const express = require('express');

const app = express();
const port = 3000;

// existe un modulo de express ver documentacion express
// el siguiente middleware se expresa seteo de cabeceras de forma manual
app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']); //Aqui se añaden los domios permitidos, el * es comodin
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE'); // se setean los metodos permitidos
  // res.append('Access-Control-Allow-Headers', 'Content-Type'); 
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
});