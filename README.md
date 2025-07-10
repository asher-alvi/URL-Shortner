# URL-Shortner
A simple and efficient REST API for shortening URLs built with Node.js, Express, and MongoDB. It includes URL validation, redirection, and expiration handling. Testable with Postman or a basic HTML. 

## Tech Stack
● Language: JavaScript
● Runtime: Node.js
● Framework: Express.js
● Database: MongoDB

## ⚙️ Setup

1. Clone & Install
```bash
git clone <[your-repo-ur](https://github.com/asher-alvi/URL-Shortner>
cd url-shortener
npm install
```

2. Start MongoDB
via Command Prompt:
```bash
mongod
```

3. Run the API
```bash
npm start
```

4. Testing the API using Postman:
Import the postman-collection.json and run:

POST http://localhost:8080/shorten

Body (JSON): { "url": "https://example.com/long/path" }

GET http://localhost:8080/<shortId> in browser.
