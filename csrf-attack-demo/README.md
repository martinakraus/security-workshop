# Executing a Cross-Site Request Forgery (CSRF) Attack

## Setup

#### OWASP Juice Shop

To execute this attack, you need to run the OWASP Juice Shop application on your computer.

1. You can either download the source code from GitHub as a ZIP file or clone the entire repository: git clone `https://github.com/juice-shop/juice-shop.git --depth 1`
2. Navigate into the cloned folder: `cd juice-shop`
3. Install the dependencies with npm install (This only needs to be done before the first start or when dependencies change). This process may take some time, and you might see warnings in the console about outdated packages. This is intentional, as the application is deliberately designed with security vulnerabilities for demonstration purposes.
4. Start the application with `npm start`
5. Open a browser and enter the following URL: `http://localhost:3000`

#### Attacker's Web Server

1. Navigate to the root folder `csrf-attack-demo`.
2. Install the dependencies with `npm install`
3. Start the application with `npm start`

The web server that serves the malicious HTML file is now accessible at `http://localhost:1111`, but before that, we need to create a user in OWASP Juice Shop.

#### Executing the Attack

1. Register a user in your OWASP Juice Shop.
2. After successfully logging in, visit your profile at http://localhost:3000/profile and set a username.
3. Leave the profile page (but it is important to keep the session open and not log out from OWASP Juice Shop).
4. Open a new tab in your web browser and visit the webpage `http://localhost:1111.`
5. Now, if you revisit your profile at http://localhost:3000/profile, you should see that the username has changed, indicating that the CSRF attack was successful.
