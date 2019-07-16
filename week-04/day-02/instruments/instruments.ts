'use strict';

export abstract class Instrument {
  protected name: string;
  abstract play(): void;
  constructor(name: string) {
    this.name = name;
  }
}

export default Instrument;