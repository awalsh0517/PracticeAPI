const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");


// Imoport routes
const authRoute = require('./routes/auth')
const postRoute = require('./routes/post')

dotenv.config();

// connect to DB
console.log('STARTING: DB CONNECTION')
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
)
  .then(() => { console.log('SUCCESS: DB CONNECTION') })
  .catch(err => { console.log('ERROR: DB CONNECTION') })

//Middleware
app.use(express.json())

// Route Middlewares
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);

console.log('STARTING: SERVER')
app.listen(3000, () => { console.log('SUCCESS: SERVER') })
