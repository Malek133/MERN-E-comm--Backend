import express from 'express'
import mongoose from 'mongoose'

const app = express();

const port =4000;

mongoose.connect("mongodb://localhost:27017/ecommers")
.then(()=>console.log('mongosse connected'))
.catch((err)=>console.log('failed to connect',err))

app.listen(port,()=>console.log('server is runnig at http//:localhost:4000'))