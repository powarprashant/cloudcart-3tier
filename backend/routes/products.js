const express = require("express")
const router = express.Router()

const pool = require("../db")

/* Get Products */

router.get("/", async (req,res)=>{

 try{

   const result = await pool.query(
     "SELECT * FROM products"
   )

   res.json(result.rows)

 }catch(err){

   res.status(500).send(err.message)

 }

})

/* Add Product */

router.post("/", async (req,res)=>{

 const {name,description,price} = req.body

 try{

   const result = await pool.query(
     "INSERT INTO products(name,description,price) VALUES($1,$2,$3) RETURNING *",
     [name,description,price]
   )

   res.json(result.rows[0])

 }catch(err){

   res.status(500).send(err.message)

 }

})

module.exports = router