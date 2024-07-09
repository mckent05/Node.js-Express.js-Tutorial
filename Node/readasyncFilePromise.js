const { readFile, writeFile } = require('fs').promises

const getText = async () => {
  try {
    const firstresult = await readFile(
      './Content/Subfolder/firstText.txt',
      'utf8',
    )
    const secondResult = await readFile(
      './Content/Subfolder/firstText.txt',
      'utf8',
    )
    await writeFile(
      './Content/Subfolde/combined-text.txt',
      `I am not sure this would work but I hope so ${firstresult}, ${secondResult}`,
    )
  }
  catch(err) {
    console.log(err)
  }
}
getText()

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// getText("./Content/Subfolder/firstText.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
