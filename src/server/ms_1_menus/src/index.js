const express = require('express');
const app = express();
const port = 3001; // Puerto en el que se ejecutará el servidor

// Ruta para la página de inicio
app.get('/', (req, res) => {
  res.send('¡Hola Mundo desde Express.js!');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});