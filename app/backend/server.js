const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")

const productRoutes = require("./routes/products")

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.get("/", (req,res)=>{
  res.send("CloudCart Backend Running")
})

app.use("/api/products", productRoutes)

const PORT = 5000

app.listen(PORT,()=>{
  console.log(`Server running on port ${PORT}`)
})