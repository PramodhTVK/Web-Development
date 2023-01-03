var express=require('express');
var mySql=require('mysql');
var app=express();
const con=mySql.createConnection({
    host:'localhost',
    user:'root',
    password:'Myfamilyisgold@143',
    database:'firstproject',
})

con.connect((err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("connected!");
    }
})

app.get("/fetchbyid/:JerseyNumber",(req,res)=>{
    const fetchid=req.params.JerseyNumber;
    con.query('select * from cricketers where JerseyNumber=?',fetchid,(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);       
         }
    })
})

app.listen(3000,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("on port 3000");      
     }
})