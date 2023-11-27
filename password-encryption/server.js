import express from 'express';
import fs from "fs";

const usersFilePath = './database/db.json';
const port = 3000;

const app = express();


// Middleware zum Parsen von JSON-Anfragen
app.use(express.json());


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
        // Die Anzahl der "Salt-Rounds" gibt an, wie oft der Salting- und Hashing-Prozess wiederholt wird.
        // Ein häufiger empfohlener Wert für die Anzahl der Salt-Rounds liegt zwischen 10 und 12,

        const saltRounds = 10;
        // ToDo create a hashed passwords by using the hash function from bcrypt

        const newUser = { username, password };
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
        // ToDo compare hashed passwords here by using the compare function from bcrypt

        const passwordMatch = password === user.password;

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
