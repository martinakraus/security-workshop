const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const csrf = require('csurf');
const ejs = require('ejs');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Initialisiere CSRF-Schutz
const csrfProtection = csrf({ cookie: true });

// Setze die Engine für die Vorlagen
app.set('view engine', 'ejs');

// Mock-Benutzerdaten (In einer echten Anwendung würden diese aus einer Datenbank kommen)
const users = [
    { id: 1, username: 'user1', password: 'password1' },
    { id: 2, username: 'user2', password: 'password2' },
];

// Mock-Token-Speicher
const tokenStore = {};

// Routen

// Startseite mit Formular zum Einloggen
app.get('/', csrfProtection, (req, res) => {
    const sessionId = req.cookies['connect.sid'];
    const token = req.csrfToken();
    tokenStore[sessionId] = token;
    res.render('index', { csrfToken: token });
});

// Erfolgseite nach erfolgreichem Einloggen
app.get('/success', (req, res) => {
    res.render('success');
});

// Fehlerseite
app.get('/error', (req, res) => {
    res.render('error');
});

// Einloggen
app.post('/login', csrfProtection, (req, res) => {
    const { username, password, _csrf } = req.body;

    // Überprüfe, ob das CSRF-Token korrekt ist
    const sessionId = req.cookies['connect.sid'];
    if (_csrf !== tokenStore[sessionId]) {
        return res.redirect('/error');
    }

    // Suche nach Benutzer in der Mock-Datenbank
    const user = users.find(u => u.username === username && u.password === password);

    if (!user) {
        return res.redirect('/error');
    }

    // Erfolgreich eingeloggt
    res.redirect('/success');
});

// Starte den Server
app.listen(port, () => {
    console.log(`Server läuft auf Port ${port}`);
});
