const http = require ('http');

const content = require ('./loadContent');

const server = http.createServer((req,res)=>{
    if(req.url=='/'){
        res.end(content.index);
    }
    else if(req.url=='/about'){
        res.end(content.about);
    }
    else if(req.url=='/blog'){
        res.end(content.blog);
    }
    else if(req.url=='/contact'){
        res.end(content.contact);
    }
    else if(req.url=='/services'){
        res.end(content.services);
    }
    else if(req.url=='/pricing'){
        res.end(content.pricing);
    }
    else if(req.url=='/work'){
        res.end(content.work);
    }
    else{
        res.end("<h1>This Page does not exist</h1>");
    }
});

module.exports = { server };