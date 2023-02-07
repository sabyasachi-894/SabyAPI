const connectDB = require("./db/connect");
const Product = require("./models/product");
const uri="mongodb+srv://sabyasachi:JCZ8iyJhJiG4y8ZN@sabyapi.hjr9rxx.mongodb.net/?retryWrites=true&w=majority";
const ProductJson = require("./products.json");

const start = async () => {
    try{
        await connectDB(uri);
        await Product.create(ProductJson);
        console.log("success");
    } catch(error){
        console.log(error);
    }
}


start();