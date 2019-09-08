'use strict';
export { };

const fs = require('fs');

function readFile(filename: String) {
  try {
    let fileContent = fs.readFileSync(filename, 'utf-8');
    return fileContent;
  } catch {
    throw Error('Unable to read file: my-file.txt');
  }
}

function checkCharacters(fromFile: string): any {
  let content: string = readFile(fromFile);
  let splitted: string[] = content.split('');
  let counter: any = [];
  let character = '';

  for (let i = 0; i < splitted.length; i++) {
    let index = splitted[i];
    if (!counter[index]) {
      counter[index] = 0;
    }
    counter[index]++;
    if (character == '' || counter[index] > counter[character]) {
      character = index;
    }
  }
  return character + ":" + counter[character];
}

console.log(checkCharacters('test.txt'));
