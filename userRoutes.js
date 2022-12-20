const express=require("express")

const router = express.Router();

let users=require("./Data")
//get all users

router.get("/",(req,res)=>{
    res.send(users)
})
//add new user
router.post("/add",(req,res)=>{
    const newUser={
        ...req.body,id:Math.random()
    }
   users.push(newUser)
   res.send({msg:"user added !",users})
})
//delete user
router.delete("/:id",(req,res)=>{
    const id=req.params.id
    users=users.filter((user)=>user.id!=id)
    res.send({msg:"user deleted",users})
})

module.exports=router