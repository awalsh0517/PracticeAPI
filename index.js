const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')


// Imoport routes
const authRoute = require('./routes/auth')

dotenv.config()

// connect to DB
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },

  () => console.log('connected to db'))

//Middleware
app.use(express.json())

// Route Middlewares
app.use('/api/user', authRoute)

app.listen(3000, () => console.log('Server is running'))
