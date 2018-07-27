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
    let headers = JSON.parse(req.body.headers);
    if(headers['']!=undefined)
        headers = null;

    if(req.body.method == "GET"){
        GET(req.body.url,headers)
        .then(d=>res.send(d))
        .catch(e=>res.send(e));
    } else if(req.body.method == "POST"){
        POST(req.body.url,headers,req.body.body)
        .then(d=>res.send(d))
        .catch(e=>res.send(e));
    }

    else 
        res.json(req.body);
});


app.post("/test",(req,res,next)=>{
    res.send(req.body)
});

app.listen(process.env.PORT || 3000,()=>console.log("Listening..."));