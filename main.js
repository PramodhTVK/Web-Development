var express=require('express');
var mySql=require('mysql');
var app=express();
app.use(express.json());
const con=mySql.createConnection({
    host:'localhost',
    user:'root',
    password:'Myfamilyisgold@143',
    database:'secondproject',
})

con.connect((err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("connected");
    }
})

app.post('/post',(req,res)=>{
    const id=req.body.id;
    const name=req.body.name;
    const mark=req.body.mark;

    con.query('insert into mytable values(?,?,?)',[id,name,mark],(err,result)=>{
    if(err){
        console.log(err);
    }else{
        res.send("POSTED");
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