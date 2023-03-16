require("dotenv").config();
const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const fileUpload=require("express-fileupload");
const cookieParser=require("cookie-parser");
const { response } = require("express");


const app=express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(fileUpload({
    useTempFiles:true
}));

//ROUTES

app.use("/user",require("./routes/userRouter"));
app.use("/subscriber",require("./routes/subscriberRouter"));
app.use("/api",require("./routes/upload"));
app.use("/",(req, res)=>{res.send("Home route")});  //just for testing

//DB CONNECTIVITY
// mongoose.set("strictQuery", false);
// mongoose.connect(process.env.MONGODB_URL);

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_URL, () => {
  console.log("Connected to MongoDB");
});


// ,{
//     useCreateIndex:true,
//     useFindAndModify:false,
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// },err=>{
//     if(err) throw err;
//     console.log("Connected to DataBase");
// }


const PORT=process.env.PORT;

app.listen(PORT,()=>{
    console.log("SERVER IS RUNNING ON PORT NO. ",PORT)
});
