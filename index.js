const express = require('express')
const app = express()
const port = 8000

var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.post('/',(req,res) => {
    console.log(req.body)
    let weight = parseFloat(req.body.firstNumber[0])
    let height = parseFloat(req.body.firstNumber[1])
    let result = weight/(height*height)
    res.send(`bmi result is ${result}`)
})


app.listen(port, () => {
  console.log(`server is running on port ${port}`)
})