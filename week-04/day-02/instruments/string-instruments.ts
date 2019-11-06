'use strict';

import Instrument from './instruments';

export default abstract class StringedInstrument extends Instrument {
  protected numberOfStrings: number;

  constructor(name: string, numberOfStrings: number) {
    super(name);
    this.numberOfStrings = numberOfStrings;
  }

  abstract sound(): void;

  play(): string {
    return `${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()} `;
  }
}
