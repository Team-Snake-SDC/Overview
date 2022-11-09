require('dotenv').config();
const Pool = require('pg').Pool
const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT
})




const getProduct = (req, res) => {
  let count = req.query.count || 5
  let page = req.query.page || 1
  console.log(count,page)
  pool
  .query(`SELECT * FROM product LIMIT ${count} OFFSET ${(page-1) * count}`)
  .then((data) => {
    res.send(data.rows)
  })
  .catch((err)=>{
    console.log("this is the error in get products", err)
    res.status(500).send(err);
  })

}

const getProductById = (req, res) => {
  let id = req.query.product_id || req.body.product_id || req.params.product_id
  pool
  .query(`SELECT * FROM (SELECT id, name, description, slogan, category, default_price, (SELECT json_agg(fea) FROM (select feature, value  FROM features WHERE product_id = product.id) as fea) as features FROM product WHERE id = ${id}) as product `)
  .then((data) => {
    res.send(data.rows)
  })
  .catch((err)=>{
    console.log("this is the error in get products", err)
    res.status(500).send(err);
  })

}

const getStlyles = (req, res) => {
  let id = req.query.product_id || req.body.product_id || req.params.product_id
  pool
  .query(`SELECT * FROM (SELECT id, productId, name, original_price, sale_price, default_style, (SELECT json_agg(pho) FROM (select thumbnail_url, url FROM photos WHERE styleId = style.id) as pho) as photos, (SELECT json_object_agg(id,sku) FROM (select size, quantity FROM skus WHERE styleId = style.id) as sku) as skus FROM style WHERE productId = ${id}) as style`)
  .then((data) => {
    res.send(data.rows)
  })
  .catch((err)=>{
    console.log("this is the error in get products", err)
    res.status(500).send(err);
  })


}

const getRelated = (req, res) => {
  let id = req.query.product_id || req.body.product_id || req.params.product_id
  pool
  .query(`SELECT json_agg(related_product_id)  FROM related WHERE current_product_id  = ${id}`)
  .then((data) => {
    res.send(data.rows[0].json_agg)
  })
  .catch((err)=>{
    console.log("this is the error in get products", err)
    res.status(500).send(err);
  })

}



 module.exports = {getProductById, getStlyles, getProduct, getRelated};