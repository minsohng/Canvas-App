import express from 'express'
import * as path from 'path'

const app = express()
const CLIENT_DIR = path.join(__dirname, '/../client/')

app.use(express.static(CLIENT_DIR))

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname + '/../client/index.html'))
})

app.listen(3000)
console.log("Running at Port 3000")