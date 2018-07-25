const express = require("express");
const bp = require("body-parser");

const app = express();

app.use(bp.json());
app.use(bp.urlencoded({extended:false}));
app.use(require("morgan")("dev"));
app.set("view engine","ejs");
app.use(express.static("static"));

const {
    GET,
    POST
} = require("./functions/methods");


/**
 * @description main landing page
 */
app.get("/",(req,res)=>{
    res.render("main");
}); 

app.post("/",(req,res)=>{

    if(req.body.method == "GET"){
        GET(req.body.url,"headers")
        .then(d=>res.send(d))
        .catch(console.log);
    }

    else 
        res.json(req.body);
});




app.listen(process.env.PORT || 3000,()=>console.log("Listening..."));