const { readFileSync, writeFileSync} = require("fs")

const firstFile = readFileSync("./Content/Subfolder/firstText.txt", "utf8")
const secondFile = readFileSync("./Content/Subfolder/secondfile.txt", "utf8")

const newfile = writeFileSync("./Content/Subfolder/written-file", `This is the new written file: ${firstFile}, ${secondFile}` )

console.log(firstFile, secondFile)
console.log(newfile)