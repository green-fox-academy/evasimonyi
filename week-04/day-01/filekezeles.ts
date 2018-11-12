/* 
fs = filesystem
https://nodejs.org/api/fs.html
letrehozunk egy valtozot aminek ua a neve mint amit hasznalni akarunk
npm telepites????

readfilesync: szinkron metodus: ez blokkolja a kodot, bev'rja amig beolvasom a fajlt
aszinkron a hatterben beolvassa a fajlt es megy tovabb

*/

export {};

declare function require (path: string): any;
const fs = require('fs');

function readFromFile(fileName: string): string {
    try {
        return fs.readFileSync(fileName, 'utf-8');  //file nev eleres, karakterkodolas
    } catch (e) {
        console.log(e);
    }
}

console.log(readFromFile('file.txt'));

/* 
ezt dobja fs.ReadFileSync is not a function
undefined
*/

