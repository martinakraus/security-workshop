# Complex CORS Request Task

From the root directory of this folder you need to start two Servers:
(You need to also do this in two separate terminals):

## Starting first Web Server:

Insert following command inside the terminak: `npm start`

You should see following output:

```
 cors_exercise_1 git:(main) ✗ npm start

> cors@1.0.0 start
> nodemon server.js

[nodemon] 3.1.7
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node server.js`
Server is running on http://localhost:3000
```

You can open `http://localhost:3000` inside your Web Browser and should see a small login-form.
Inside the `index.html` file you'll find the implementation of `fetch` that is made when you login.
(There is no check of login data at all you can enter what you want to login)

## Starting API Server:

Insert following command inside a second terminak: `npm run start-cors`

You should see following output:

```
➜  cors_exercise_1 git:(main) ✗ npm run start-cors

> cors@1.0.0 start-cors
> nodemon cors-server.js

[nodemon] 3.1.7
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node cors-server.js`
Server is running on http://localhost:4000
```

This is our API Server where we need to configure our CORS policy.
You'll finde the implementation inside the `cors-server.js`-File.
All CORS-Policies are defined inside the CORS middleware:

```
app.use(cors({}));
```
