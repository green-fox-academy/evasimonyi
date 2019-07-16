'use strict';

import { Instrument } from './instruments'

abstract class StringedInstrument extends Instrument {
  numberOfStrings: number;
  abstract sound(): void;
  play() {
    return `${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()} `;
  }
  constructor(name: string, numberOfStrings: number) {
    super(name);
    this.numberOfStrings = numberOfStrings;
  }
}

class ElectricGuitar extends StringedInstrument {
  constructor() {
    super('electric guitar', 4);
  }

  sound() {
    return 'Twang';
  }
  play() {
    return this.sound();
  }
}


let newGuitar: ElectricGuitar = new ElectricGuitar();
console.log(newGuitar.numberOfStrings);
newGuitar.play;