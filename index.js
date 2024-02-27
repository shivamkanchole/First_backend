// Here we are creating our backend
require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Congrats for your first Server!')
})

app.get('/login' , (req,res)=>{
  res.send("This is login page")
})

app.get('/newf', (req,res)=>{
    res.send("Introdusing new feature")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.port}`)
})