# Configure Client Application

## Preperation: Clone or download example Repo from Auth0:

- ` git clone https://github.com/auth0-samples/auth0-angular-samples`
- `cd auth0-angular-samples/Standalone`
- `npm i`

## Task: Configure Client

1. Rename the file `auth_config.json.example` to `auth_config.json`
2. Insert YOUR client Id into the field `{CLIENT_ID}` and YOUR Domain into `{DOMAIN}`
3. Remove the value `{API_IDENTIFIER}` -> ` "audience": ""` (We need to fix this later)
4. Run your App with: `npm start`
5. Visit `http://localhost:4200` in your Web Browser - you should be able to login
6. Visit `https://jwt.io/` and decode your personal `IdToken`


