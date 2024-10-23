import express from 'express'
import mongoose from 'mongoose'
import useRouter from './routes/userRoute'

const app = express();

const port =4000;

app.use(express.json());


mongoose.connect("mongodb://localhost:27017/ecommers")
.then(()=>console.log('mongosse connected'))
.catch((err)=>console.log('failed to connect',err))

app.use('/user',useRouter)

app.listen(port,()=>console.log('server is runnig at http//:localhost:4000'))