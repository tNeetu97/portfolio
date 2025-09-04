let express=require("express");
let app=express();
let port=process.env.PORT || 8080;
let path=require("path");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.json());
app.set("views",path.join(__dirname,"views"));
app.set('view engine','ejs');
app.listen(port,()=>{
    console.log("Listening.....");
})
app.get("/portfolio",(req,res)=>{
    res.render("home.ejs" );
})
app.get("/portfolio/simon",(req,res)=>{
    res.render("simon.ejs");

});
app.get('/',(req,res)=>{
    res.send("hello render");
})
app.post("/portfolio",(req,res)=>{
    res.redirect("/portfolio");
})
app.get("/portfolio/Resume",(req,res)=>{
    res.render("resume.ejs");
}

)
