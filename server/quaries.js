const Pool = require('pg').Pool
const pool = new Pool({
  user: 'mrway',
  host: 'localhost',
  database: 'Overview',
  password: '',
  port: 5432,
})


const getProductById = (req, res) => {
  let id = req.query.id || req.body.id || req.params.id
  pool
  .query(`SELECT * FROM product LIMIT 12`)
  .then((data) => {
    res.send(data.rows)
  })
  .catch((err)=>{
    console.log("this is the error in get products", err)
    res.status(500).send(err);
  })

}

 module.exports = {getProductById};