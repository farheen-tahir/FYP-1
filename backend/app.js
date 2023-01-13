const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const cors=require("cors");
const bcrypt=require("bcrypt");
const saltRounds=10;


const app=express();
app.use(express.json());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

mongoose.connect("mongodb://localhost:27017/EAid");
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    type:String
});
const USER=mongoose.model("User",userSchema);
app.get("/",function(req,res) {

});
app.post("/signin",function(req,res) {
    const {email,password}=req.body;
    USER.findOne({email:email},(err,user)=>{
        if(user) {
            bcrypt.compare(password, user.password, function(err, result) {
                if(result===true) {
                    res.send({message:"success ",user:user});
                    console.log("success");
                } else {
                    res.send({message:"not same password"});
                    console.log("pin galat");
                }    
            });
           
        }
        else {
            res.send({message:"no user exist in the system"});
            console.log("no availablle");
        }
    });
});
app.post("/signup",function(req,res){
    const {name,email,password,type}=req.body;
    bcrypt.hash(password, saltRounds).then(function(hash) {
        USER.findOne({email:email},(err,user)=>{
            if(user) {
                res.send({message:"already exist"});
                
            } else {
                const user=new USER ({
                    name:name,email:email,password: hash,type:type
                });
                user.save(function(err) {
                    if(err) {
                        res.send(err);
                    }else {
                        res.send({message:"success"});
                    }
                });
            }
        });   
    });
    // console.log(req.body);
    
});
app.listen(5000,function(){
    console.log("server is running on port 5000");
});