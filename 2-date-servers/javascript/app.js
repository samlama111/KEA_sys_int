import express from 'express'
import fetch from 'node-fetch'

const app = express()

app.get("/", (req, res) => {
    console.log('kkt')
})

app.get("/timestamp", (req, res) => {
    res.send(new Date())
})

app.get("/get/timestamp", async (req, res) => {
    try {
        const response = await fetch("http://127.0.0.1:8000/timestamp")
        const dateObject = await response.json()
        const newDateObject = new Date(dateObject.Date)
        res.send(newDateObject)
    } catch (err) {
        console.log('Connection to date authority failed')
    }
})

app.listen(3000, () => {
	console.log(`Date app listening on port 3000`)
})
