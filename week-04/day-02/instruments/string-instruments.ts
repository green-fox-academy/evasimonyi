'use strict';

import { Instrument } from './instruments'

abstract class StringedInstrument extends Instrument {
  numberOfStrings: number;
  abstract sound(): void;
  play() {
    console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()} `);
  }
  constructor(name: string, numberOfStrings: number) {
    super(name);
    this.numberOfStrings = numberOfStrings;
  }
}

class ElectricGuitar extends StringedInstrument {
  numberOfStrings: number = 4;
  name: string = 'haho';

  constructor() {
    super();
  }
  sound() {
    return 'Twang';
  }

}

// if you declare numberofstrings to 6 in the constructor, you CAN override it, when creating a new object from that class
// if you declare it in the fields at the property, you CANT overwrite it
// export class ElectricGuitar extends StringedInstrument {
//   constructor(stringNumber: number = 6) {
//     super(name);
//     this.numberOfStrings = stringNumber;
//   }

// }

let newGuitar: ElectricGuitar = new ElectricGuitar();
console.log(newGuitar.numberOfStrings);