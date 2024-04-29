const express = require ('express');
const axios = require('axios');

const app = express();
const SERVER_PORT = 3000;

// Middleware para habilitar CORS (Cross-Origin Resource Sharing)
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Permitir solicitudes desde cualquier origen
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

// Ruta para manejar las solicitudes de la aplicación cliente
app.get('/api/data', async (req, res) => {
    try {
      // Realizar una solicitud a la API externa
      const response = await axios.get('https://fastapifutsalnies-production.up.railway.app/v1/fixtures/');
      
      // Devolver los datos obtenidos de la API externa como respuesta a la solicitud del cliente
      res.json(response.data);
    } catch (error) {
      // Manejar cualquier error que ocurra durante la solicitud a la API externa
      console.error('Error al obtener datos de la API externa:', error.message);
      res.status(500).json({ error: 'Error al obtener datos de la API externa' });
    }
  });
  
  // Iniciar el servidor Express
  app.listen(SERVER_PORT, () => {
    console.log(`Servidor Express iniciado en el puerto ${SERVER_PORT}`);
  });
