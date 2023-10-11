const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;
const cors = require('cors');

app.use(express.json());
app.use(cors()); // Neu hinzugefügt

// Endpunkt zum Überprüfen des reCAPTCHA-Tokens
app.post('/verify-recaptcha', async (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ success: false, message: 'Token fehlt' });
  }

  try {
    // Google reCAPTCHA API-Endpunkt
    const googleApiUrl = 'https://www.google.com/recaptcha/api/siteverify';

    // Überprüfe das Token bei Google
    const response = await axios.post(googleApiUrl, {
      secret: '',
      response:  token ,
    } , {
      headers: { "Content-Type": "application/x-www-form-urlencoded" }
    });

    // Überprüfungsantwort von Google
    const { success, score, action, challenge_ts } = response.data;

    console.log(response);

    if (success) {
      return res.json({ success, score, action, challenge_ts });
    } else {
      return res.json({ success: false, message: 'reCAPTCHA-Überprüfung fehlgeschlagen' });
    }
  } catch (error) {
    console.error('Fehler bei der reCAPTCHA-Überprüfung:', error.message);
    return res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

// Starte den Server
app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});
