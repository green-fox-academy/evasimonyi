// Write a program that opens a file called 'my-file.txt', then prints
// each of lines form the file.
// If the program is unable to read the file (for example it does not exists),
// then it should print an error message like: 'Unable to read file: my-file.txt'
export { };
declare function require(path: string);
const fs = require('fs');

if (fs.existsSync('my-file.txt')) {
    let fileContent = fs.readFileSync('my-file.txt', 'utf-8');
    console.log(fileContent);
} else {
    throw Error('Unable to read file: my-file.txt');
}

//file exists nem volt a materialban
// fs.access ?
