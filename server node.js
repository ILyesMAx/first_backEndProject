/**
 * Created by ILyes_MAx on 26/05/2017.
 */
var ex = require("express");
var app = ex();
app.use(ex.static("public"));
app.use(ex.static("public/les_donnes/css"));
app.use(ex.static("public/les_donnes/img"));
app.use(ex.static("public/les_donnes/js"));
app.set('view engine','ejs');
app.get("/",function (req,res) {

    res.render("f");
    
}).get("*",function (req,res) {
    res.send("realy nigga ");
});
app.listen(80,function () {
    console.log("you are connected at 80");
});
