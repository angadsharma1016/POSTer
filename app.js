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



/**
 * @description Main post data needed to send request
 * 
 * {
 *  url:String,
 *  method:String,
 *  headers:JSON,
 *  data:String (optional)
 * }
 */
app.post("/",(req,res)=>{

    if(req.body.method == "GET"){
        GET(req.body.url,JSON.parse(req.body.headers))
        .then(d=>res.send(d))
        .catch(console.log);
    } else if(req.body.method == "POST"){
        POST(req.body.url,JSON.parse(req.body.headers),req.body.data)
        .then(d=>res.send(d))
        .catch(console.log);
    }

    else 
        res.json(req.body);
});




app.listen(process.env.PORT || 3000,()=>console.log("Listening..."));