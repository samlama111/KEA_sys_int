import express from 'express'

const app = express()

app.get("/", (req, res) => {
    console.log('kkt')
})

app.get("/timestamp", (req, res) => {
    res.send(new Date())
})

app.listen(3000, () => {
	console.log(`Date app listening on port 3000`)
})
