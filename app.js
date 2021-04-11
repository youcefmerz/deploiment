const express = require("express")
const path = require("path")
require("dotenv").config()
const app = express()
const publicDirectoryPath = path.join(__dirname, "./public")
app.use(express.static(publicDirectoryPath))

const port = process.env.PORT   || 3000

app.listen(port , () =>{
    console.log(`server is up on port ${port}`)
})

