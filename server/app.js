require('dotenv').config();
const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')
const cors = require('cors')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const cloudinary = require('cloudinary')

// console.log(process.env)

const app = express()
const router = express.router()
const url = process.env.MONGODB_URI

/**configure cloudinary */
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET_KEY
  });

  /**connect to mongoDB drivers */

  try {
    mongoose.connect(url, {
        useMongoClient: true
    })    
} catch (error) {
    console.log(error)
}

let port = 5000 || process.env.PORT

routes(router)

app.use(cors())
app.use(bodyParser.json())
app.use(helmet())

app.use('/api',router)

/**start server */
app.listen(port,()=> {
    console.log(`Server started at port: ${port}`);
})

