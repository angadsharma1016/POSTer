const express = require("express");
const bp = require("body-parser");

const app = express();

app.use(bp.json());
app.use(bp.urlencoded({extended:false}));
app.use(require("morgan")("dev"));
app.set("view engine","ejs");
app.use(express.static("static"));


/**
 * @description main landing page
 */
app.get("/",(req,res)=>{
    res.render("main");
}); 




app.listen(process.env.PORT || 3000,()=>console.log("Listening..."));