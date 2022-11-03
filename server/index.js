
const express = require('express')
const app = express();
const PORT = 3000
const db = require("./quaries.js")


app.use(express.json())
// app.use(express.urlencoded())


app.get('/', (req, res) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/overview' , db.getProductById)


app.listen(PORT);
console.log(`Listening at http://localhost:${PORT}`);