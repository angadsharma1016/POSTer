const {
    GET,
    POST
} = require("./methods");

GET("https://www.google.com",1).then(console.log).catch(console.log)