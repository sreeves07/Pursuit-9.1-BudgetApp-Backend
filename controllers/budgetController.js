const express = require("express")
const budget = express.Router()

const budgetArray = require("../models/transactions")

budget.get("/", (req, res) => {
    res.json(budgetArray)
})

budget.post("/", (req, res) => {
    budgetArray.push(req.body)
    res.json(budgetArray.length - 1)
})

budget.get("/:index", (req, res) => {
    const { index } = req.params
    if(budgetArray[index]) {
        res.status(200).json(budgetArray[index])
    } else {
        res.status(404).redirect("/budget")
    }
})

budget.delete("/:index", (req, res) => {
    const { index } = req.params
    const deletedBudget = budgetArray.splice(index, 1)
    res.status(200).json(deletedBudget)
})

budget.put("/:index", (req, res) => {
    const { index } = req.params
    budgetArray[index] = req.body
    res.status(200).json(budgetArray[index])
})

module.exports = budget