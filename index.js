const path = require('path')
const express = require('express')
require('dotenv').config({path: path.resolve(__dirname, './prod.env')})
require('./db/mongoose')
const userRouter = require('./routers/user')






const app = express()
const port = process.env.PORT || 3001




app.use(express.json())
app.use(userRouter)






app.listen(port, () => {
    console.log('Server is up on port ' + port)
})