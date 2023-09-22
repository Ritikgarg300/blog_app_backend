const express =require('express')
const app= express();
require("dotenv").config();
const PORT= process.env.PORT || 3000
app.use(express.json());
const blog= require('./Routes/blog');
// const dummyroute= require('./Routes/dummyRoutes')
app.use('/api/v1',blog);
// app.use('/api/v1',dummyroute)
const connectDb= require('./Config/Database');
connectDb();
app.listen(PORT,()=>{
    console.log(`App is started at PoRT np ${PORT}`)
})
app.get('/',(req,res)=>{
    res.send(`<h1> hello</h1>`)
})