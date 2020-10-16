const express = require('express');

const app = express();
const port = 3000;

app.get('/', (_, res) => {
  res.json({
    mensaje: 'Bienvenido a mi API,  gracias por visitarnos.',
    integrantes: [
      'Óscar Alberto Arrieta González',
      'Jorge Luis Flórez Torres'
    ]
  })
});

app.listen(port, () => {
  console.log(`API ejecutandose en http://localhost:${port}`);
});