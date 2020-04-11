import express from 'express'
import * as path from 'path'

const app = express()

app.use(express.static(path.join(__dirname, '/../client')))

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname + '/../client/index.html'))
})

app.listen(3000)
console.log("Running at Port 3000")