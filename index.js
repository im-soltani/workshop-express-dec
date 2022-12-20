const express=require("express")
//const date=require("./middleware/date")

const app=express()
app.use(express.json())

/*
app.get("/home",date,(req,res)=>{
    res.sendFile(__dirname+"/public/home.html")
})

app.get("/about",date,(req,res)=>{
    res.sendFile(__dirname+"/public/about.html")
})

app.get("*",date,(req,res)=>{
    res.sendFile(__dirname+"/public/index.html")
})
*/

app.use("/users",require("./userRoutes"))


app.listen(5000,(err)=>{
    err?console.log(err):console.log("server is running on port 5000")
})