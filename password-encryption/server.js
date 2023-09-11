import express from 'express';
import bcrypt from 'bcrypt';
import fs from "fs";

const app = express();
const port = 3000;

// Middleware zum Parsen von JSON-Anfragen
app.use(express.json());

const usersFilePath = './database/db.json';

// Registrierung eines Benutzers
app.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;

        const usersData = JSON.parse(fs.readFileSync(usersFilePath));

        // Überprüfen, ob der Benutzer bereits existiert
        const existingUser = usersData.users.find(user => user.username === username);
        if (existingUser) {
            return res.status(409).json({ message: 'Benutzer existiert bereits.' });
        }

        // Passwort hashen und Benutzer erstellen
        const saltRounds = 10;

        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newUser = { username, password: hashedPassword };
        usersData.users.push(newUser);

        fs.writeFileSync(usersFilePath, JSON.stringify(usersData, null, 2));

        res.status(201).json({ message: 'Benutzer wurde erfolgreich registriert.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Serverfehler.' });
    }
});

// Anmelden eines Benutzers
app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const usersData = JSON.parse(fs.readFileSync(usersFilePath));

        // Benutzer abrufen
        const user = usersData.users.find(user => user.username === username);

        // Überprüfen, ob der Benutzer existiert
        if (!user) {
            return res.status(401).json({ message: 'Ungültige Anmeldeinformationen.' });
        }

        // Passwort überprüfen
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ message: 'Ungültige Anmeldeinformationen.' });
        }

        res.status(200).json({ message: 'Anmeldung erfolgreich.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Serverfehler.' });
    }
});

// Starten der Serveranwendung
app.listen(port, () => {
    console.log(`Server läuft auf Port ${port}`);
});
