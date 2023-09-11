// Setup the application
const PAGES = `${__dirname}/pages`;
const port = 3000;

// Load CSP middleware
const { expressCspHeader, NONCE } = require('express-csp-header');

// Load Express
const express = require("express");
const app = express();

// Enable EJS templates
app.set('view engine', 'ejs');

// Serve JS files from the 'js' folder
app.use("/js", express.static("js"));

// Setup a default route
app.get("/", (req, res) => {
    res.send("Welcome to this CSP demo. Try one of the demo endpoints.");
});

// Setup the data for the page
const data = [
    `John`,
    `Annie<img src="none" onerror="console.warn('evil 1')">`,
    `Martina<script>console.warn('evil 2')</script>`
];


/****************
 * Demo: Basics *
 ****************/

// Define the CSP policy for this endpoint
const csp_basics = {
    directives: {
        'script-src': []
    }
}

// Serve the endpoint with CSP enabled
app.get("/basics", (req, res) => {
    // Render the EJS page with the data
    res.render(`${PAGES}/list-names`, { data: data });
});



/****************
 * Task 1: Hashes *
 ****************/

// Define the CSP policy for this endpoint
const csp_hashes = {
    directives: {
        'script-src': ["'self'"]
    }
}

// Serve the endpoint with CSP enabled
app.get("/hashes", (req, res) => {
    // Render the EJS page with the data
    res.render(`${PAGES}/list-names-with-count`, { data: data });
});



/****************
 * Task 2: Nonces *
 ****************/

// Define the CSP policy for this endpoint
const csp_nonces = {
    directives: {
        'script-src': [] // NONCE refers to a freshly calculated nonce
    }
}

// Serve the endpoint with CSP enabled
app.get("/nonces", expressCspHeader(csp_nonces), (req, res) => {
    // Render the EJS page with the data
    // The middleware exposes the calculated nonce on req.nonce
    res.render(`${PAGES}/list-names-with-count-nonces`, { data: data });
});


/****************
 * Task 3: Trusted-Types *
 ****************/


// Serve the endpoint with CSP enabled
app.get("/trusted-types" , (req, res) => {
    // Render the EJS page with the nonce
    res.set('Content-Security-Policy', 'require-trusted-types-for \'script\'');
    res.render(`${PAGES}/trusted-names`, { data: data });
});


/***********************
 * Universal CSP *
 ***********************/

// Define the CSP policy for this endpoint
const csp_universal = {
    directives: {
        'script-src': [
            NONCE, "'strict-dynamic'",
            "'unsafe-inline'", "http:", "https:",
            "'unsafe-eval'"
        ],
        'object-src': ["'none'"],
        'base-uri': ["'self'"]
    }
}

// Start the app
app.listen(port, () => {
    console.log(`CSP demo available at http://localhost:${port}`);
});
