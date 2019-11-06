'use strict';

export default abstract class Instrument {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract play(): string;
}
