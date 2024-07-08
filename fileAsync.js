const { readFile, writeFile } = require('fs')

readFile('./Content/Subfolder/firstText.txt', 'utf8', (err, result) => {
  if (err) return
  const firstresult = result
  readFile('./Content/Subfolder/secondfile.txt', 'utf8', (err, result) => {
    if (err) return
    const secondResult = result
    writeFile(
      './Content/Subfolder/secondText2.txt',
      `here is the printed result ${firstresult} ${secondResult} `,
      (err, result) => {
        if (err) return
      },
    )
  })
})

