const { createReadStream } = require("fs")

const stream = createReadStream("./Content/Subfolder/big-text.txt")

stream.on("data", (result) => {
    console.log(result)
})

const http = require("http")
const { createReadStream} = require("fs")


http.createServer((req, res) => {
    const fileStream = createReadStream("./Content/Subfolder/big-text.txt", "utf8")
    fileStream.on("open", () => {
        fileStream.pipe(res)
    })
    fileStream.on("error", (err) => {
        res.end(err)
    })
}).listen(5000)