const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./Routes/AuthRoutes");
const app = express();
const cookieParser = require("cookie-parser");

//Hacer que app escuche en puerto 4000
app.listen(4000,()=>{
    console.log("Server en el puerto 4000");
})

//Conexion a mongodb y db
mongoose
  .connect("mongodb://127.0.0.1:27017/ecommerce", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use(cors ({
    origin:["http://localhost:3000"],
    method:["GET", "POST"],
    credentials: true
}));


app.use(cookieParser());
app.use(express.json());
app.use("/",authRoutes);