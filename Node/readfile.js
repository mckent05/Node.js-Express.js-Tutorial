const { readFileSync, writeFileSync } = require("fs");

const firstFile = readFileSync("./Content/Subfolder/firstText.txt", "utf8");
const secondFile = readFileSync("./Content/Subfolder/secondfile.txt", "utf8");

writeFileSync(
  "./Content/Subfolder/written-file",
  `This is the new written file: ${firstFile}, ${secondFile}`
);

for(let i = 0; i < 10000; i++) {
  writeFileSync(
    "./Content/Subfolder/big-text.txt",
    `This is the new written file: ${i}\n`,
    {flag: "a"}
  );
}

console.log(firstFile, secondFile);
