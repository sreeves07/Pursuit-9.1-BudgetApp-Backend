//Dependencies
const express = require("express")
const app = express()
const cors = require("cors")

const budgetController = require("./controllers/budgetController")

//Routes
app.use(express.json())
app.use(cors())
app.use("/budget", budgetController)

//Export 
module.exports = app
