const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Ruta de bienvenida
app.get('/', (req, res) => {
  res.send('Bienvenido al backend de Reformer Spain SA');
});

// Ruta para manejar presupuestos
app.post('/api/budget', (req, res) => {
  const { name, email, details } = req.body;
  console.log(`Solicitud de presupuesto recibida: ${name}, ${email}, ${details}`);
  res.status(200).send('Presupuesto enviado con éxito');
});

// Ruta para manejar cargas de archivos
app.post('/api/upload', (req, res) => {
  console.log('Archivo cargado correctamente');
  res.status(200).send('Archivo cargado con éxito');
});

// Configuración del puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
