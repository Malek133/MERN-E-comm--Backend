import express from 'express'
import mongoose from 'mongoose'
import useRoute from './routes/userRoute'
import { seedInitialProduct } from './services/productServices';
import productRoute from './routes/productRoute';
import carteRoute from './routes/cartRoute'

const app = express();

const port =4000;

app.use(express.json());



mongoose.connect("mongodb://localhost:27017/ecommers")
.then(()=>console.log('mongosse connected'))
.catch((err)=>console.log('failed to connect',err))

seedInitialProduct()

app.use('/user',useRoute)
app.use('/product',productRoute)
app.use('/cart',carteRoute)

app.listen(port,()=>console.log('server is runnig at http//:localhost:4000'))