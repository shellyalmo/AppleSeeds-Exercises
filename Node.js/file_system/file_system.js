// 1. Create a new txt file using the same fs module method we have
// learned before.
const fs = require("fs");
fs.writeFileSync("newFile.txt", "");
// 2. Create a copy of the newly created txt file using a method from
// the fs module.
fs.copyFileSync("newFile.txt", "newerFile.txt");
// 3. Rename one of the files using a method from the fs module.
fs.renameSync("newerFile.txt", "renamedFile.txt");
// 4. Get a list of all the file names of the current directory using a
// method from the fs module.

const files = fs.readdirSync(__dirname, { withFileTypes: true });

console.log(files);
// 5. Find out and implement another method for the fs module.
fs.appendFileSync("newFile.txt", "this text was appended!");
