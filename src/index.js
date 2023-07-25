const express = require('express');//llamo a express.
const mongoose = require('mongoose')//llamo a mongoose para crear la coneccion con mongoDb
require ("dotenv").config();//
const userRoute = require("./routes/user");

const app = express();
const port = process.env.Port || 9000;

//midleware
app.use(express.json());
app.use/('/api', userRoute);

//ruta para verificar que nuestro servidor esta funcionando.
app.get("/", (req, res)=> {
    res.send("welcome to my api")
})

//mongodb connection.
mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log("Connect to MongoDb Atlas"))
.catch((error) => console.error(error));


app.listen(port, () => console.log('server listening on port', port));