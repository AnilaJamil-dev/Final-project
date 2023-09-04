const express = require('express')
const app = express()
require('dotenv').config()
 const cors = require('cors')
// const CategoryRouter = require('./API/Category/Router')
const path =require('path')

const clientpath =path.join(__dirname,'./client/dist')

const port = process.env.SERVER_PORT  || 3200

app.use('/',express.static(clientpath))

app.use(express.json())
app.use(cors())
// app.use('/api',CategoryRouter)

app.use('/api', require('./API/Brands/Router'))
app.use('/api', require('./API/Category/Router'))
app.use('/api', require('./API/Users/Router'))
app.use('/api', require('./API/Products/Router'))
app.use('/api', require('./API/Orders/Router'))



app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'./client/dist/index.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})


