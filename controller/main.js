exports.getFrontPage = (req,res,next) =>{
    res.render("main",{})
}

exports.postFrontPage = (req,res,next) =>{
        console.log(req.body)
        res.redirect("/")
}

exports.postData = (req,res,next) =>{
    
    res.redirect("/")
}