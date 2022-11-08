
const express = require('express')
const app = express();
const PORT = 3000
const db = require("./quaries.js")


app.use(express.json())
// app.use(express.urlencoded())


app.get('/', (req, res) => {
  res.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/products', db.getProduct)

app.get('/products/:product_id', db.getProductById)

app.get('/products/:product_id/styles', db.getStlyles)

app.get('/products/:product_id/related', db.getRelated)


app.listen(PORT);
console.log(`Listening at http://localhost:${PORT}`);