const { createReadStream } = require("fs")

const stream = createReadStream("./Content/Subfolder/big-text.txt")

stream.on("data", (result) => {
    console.log(result)
})