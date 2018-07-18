const request = require("request");

module.exports.GET = (url,headers)=>{
    return new Promise((resolve,reject)=>{
        request.get(url,(err,response,body)=>{
            if(err)
                reject(err)
            else
                resolve(body);
        });
    });
}




module.exports.POST = (url,headers,data)=>{
    return new Promise((resolve,reject)=>{
        request.post(url,data,(err,response,body)=>{
            if(err)
                reject(err)
            else
                resolve(body);
        });
    });
}




