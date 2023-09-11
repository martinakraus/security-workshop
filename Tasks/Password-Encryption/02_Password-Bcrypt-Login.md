# Simple Password Encryption with Bcrypt

## Preperation

1. Open the application `password-encryption`
2. Run `npm i`

## Task: Implement Login Route

The Login-Handler compares the passwords as plain text.
We need to fix that:

- Import the bcrypt Library in your server.js file
- use the `compare`-Function to compare the hash passwords

## Hints

You can use the Postman Collection `Password-Encryption.postman_collection.json` for testing your endpoints


```javascript
import bcrypt from 'bcrypt';

...
const passwordMatch = await bcrypt.compare(password, user.password);

```
