// const os = require("os")

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
// const user = os.userInfo()

// console.log("temitope is a child of God")
