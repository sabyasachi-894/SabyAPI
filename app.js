//require("dotenv").config();
const express= require("express");
const app=express();
const connectDB = require("./db/connect");
const PORT = process.env.PORT || 8000;


const products_routes = require("./routes/products");

app.get("/",(req,res) => {
    res.send("Hello from backend");
})

app.use("/api/products",products_routes);

const start = async() => {
    try{
        //app.listen(port,hostname,backlog)
        await connectDB();
        app.listen(PORT, () => {
            console.log(`${PORT} Yes I am connected!!!`);
        })
    }
    catch(error){
        console.log(error);
    }
}

start();