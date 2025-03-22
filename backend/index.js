const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Bienvenido al backend de Reformer Spain SA');
});

app.post('/api/budget', (req, res) => {
  const { name, email, details } = req.body;
  console.log(`Solicitud recibida: ${name}, ${email}, ${details}`);
  res.status(200).send('Presupuesto enviado con éxito');
});

app.post('/api/upload', (req, res) => {
  // Simula la carga de archivos
  console.log('Archivo cargado');
  res.status(200).send('Archivo cargado correctamente');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
