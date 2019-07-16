'use strict';

export abstract class Instrument {
  protected name: string;
  abstract play(): string;
  constructor(name: string) {
    this.name = name;
  }
}

export default Instrument;