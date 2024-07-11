const { readFileSync} = require('fs')
const http = require('http')

const homePage = readFileSync("./Express.js/navbar.html")
const homePage2 = readFileSync("./Express.js/app2.js")
const homePage3 = readFileSync("./Express.js/style.css")

http.createServer((req, res) => {
    if(req.url === "/") {
        res.writeHead(200, {'content-type': "text/html"})
        res.write(homePage)
        res.end()
    }
    else if(req.url === "/app2.js" ) {
        console.log(req.url)
        res.writeHead(200, {'content-type': 'text/javascript'})
        res.write(homePage2)
        res.end()
    }
    else if(req.url === "/style.css" ) {
        console.log(req.url)
        res.writeHead(200, {'content-type': 'text/css'})
        res.write(homePage3)
        res.end()
    }
    res.end()
}).listen(5000)