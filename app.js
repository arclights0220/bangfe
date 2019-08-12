const express = require("express")
const app = express()
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(express.static("public"))

function getmess(cb){
    cb("helloworld!");
}
app.listen(8000, (req,res)=>{
    getmess(function(message){
        console.log(message);
    })
})

app.post("/login/new", (req, res) =>{
    if(req.body.username == 1234 || req.body.password == 3456){
        console.log("connect")
        res.send({
            
        })
    }
    else{
        console.log("no")
        alert("no");
    }
})