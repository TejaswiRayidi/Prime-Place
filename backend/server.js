import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import userRouter from './routers/userRouter.js'
import productRouter from './routers/productRouter.js'
import dotenv from 'dotenv'
import orderRouter from './routers/orderRouter.js'


dotenv.config();

const app = express()
const port = process.env.PORT || 5000;
const connection_url = "mongodb+srv://tejaswirayidi123:Tejaswi@123@cluster0.oztc8oy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


mongoose.connect(connection_url,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})



app.use(express.json());
app.use(express.urlencoded());
app.use(cors());



app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);
app.get('/api/config/paypal', (req,res)=>{
    res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
})

app.get('/',(req,res)=>res.status(200).send('Hello.It is PrimePlace project.'))


// Listening to  server

app.listen(port,()=>console.log(`Listening on local host:${port}`))
