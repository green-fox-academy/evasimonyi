/* 
fs = filesystem
https://nodejs.org/api/fs.html
letrehozunk egy valtozot aminek ua a neve mint amit hasznalni akarunk

readfilesync: szinkron metodus: ez blokkolja a kodot, bevarja amig beolvasom a fajlt
aszinkron: a hatterben beolvassa a fajlt es megy tovabb
*/

'use strict';
export { };

declare function require(path: string): any;
const fs = require('fs');

function readFromFile(fileName: string): string {
	try {
		return fs.readFileSync(fileName, 'utf-8');  //file nev eleres, karakterkodolas
	} catch (e) {
		console.log(e);
	}
}

console.log(readFromFile('file.txt'));


