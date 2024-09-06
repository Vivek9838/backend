require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT;

// console.log(process.env.PORT);


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/about",(req,res)=>{
    res.send("This is about page")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})