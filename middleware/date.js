const date=(req,res,next)=>{

    const date=new Date()
const day=date.getDay()
const heure=date.getHours()

if(!(day>=1 && day<=5 && heure>=9 && heure<=17)){
    res.send("<h1>hors service</h1>")
}
next()

}
module.exports=date