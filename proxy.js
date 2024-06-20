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

// Ruta para manejar las solicitudes de la aplicación cliente para API futsal nies sullivan
app.get('/api/data', async (req, res) => {
    try {
      // Realizar una solicitud a la API externa
      const response = await axios.get('http://64.23.243.233:6969/v1/fixtures/');
      
      // Devolver los datos obtenidos de la API externa como respuesta a la solicitud del cliente
      res.json(response.data);
    } catch (error) {
      // Manejar cualquier error que ocurra durante la solicitud a la API externa
      console.error('Error al obtener datos de la API externa:', error.message);
      res.status(500).json({ error: 'Error al obtener datos de la API externa' });
    }
  });

  // Routa para manejar la petición de la solicitud de aplicación cliente para match notes
app.get('/api/match_note', async (req, res) => {
    try {
        // Realizar una petición a la API de match_note para resumen del partido
        const response = await axios.get('http://64.23.243.233:6969/v1/match_note/');
        
        // Devolver los datos obtenidos de la API externa como respuesta a la solicitud del cliente
        res.json(response.data);
    } catch (error) {
        // Manejar cualquier error que ocurra durante la solicitud a la API externa
        console.error('Error getting data from external API:', error.message);
        res.status(500).json({ error: 'Error getting data from external API' });
    }
});

 // Routa para manejar la petición de la solicitud de aplicación cliente para Tabla Copmleta de resultados
 app.get('/api/match_note', async (req, res) => {
  try {
      // Realizar una petición a la API de match_note para Tabla Completa
      const response = await axios.get('http://64.23.243.233:6969/v1/general_table/');
      
      // Devolver los datos obtenidos de la API externa como respuesta a la solicitud del cliente
      res.json(response.data);
  } catch (error) {
      // Manejar cualquier error que ocurra durante la solicitud a la API externa
      console.error('Error getting data from external API:', error.message);
      res.status(500).json({ error: 'Error getting data from external API' });
  }
});
  
  // Iniciar el servidor Express
  app.listen(SERVER_PORT, () => {
    console.log(`Servidor Express iniciado en el puerto ${SERVER_PORT}`);
  });
