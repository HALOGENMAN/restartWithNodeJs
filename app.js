const app = require("express")();
const bodyParser = require('body-parser')
const mongoose = require("mongoose");

MONGOOSE_URI = "mongodb+srv://shayak:159951sm357753@cluster0-fidtq.mongodb.net/restart" ;


app.set("view engine","ejs")
app.set("views","views")

app.use(bodyParser.urlencoded({extended:false}))

const mainRouter = require("./router/main")
app.use(mainRouter);

app.get("/",(req,res,next)=>{
    res.send("<h1>404 Page not found </h1>")
})

mongoose.connect(MONGOOSE_URI)
    .then(()=>{
        console.log("connected");
        app.listen(5000);
    })
    .catch(err=>console.log(err))

