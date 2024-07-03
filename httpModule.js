const http = require("http")

const server = http.createServer((req, res) => {
    switch (req.url) {
        case "/":
            res.end("welcome to the home page");
            break
        case "/about":
            res.end("welcome to the about page")
            break    
        default:
            res.end(
                `<h1>Oops </h1>
                <p> The page you are looking for does not exist</p>`
            )
            break
    }
})
server.listen(5000)