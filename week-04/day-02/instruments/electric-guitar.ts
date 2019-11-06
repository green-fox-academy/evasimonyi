import StringedInstrument from './string-instruments';

export default class ElectricGuitar extends StringedInstrument {
  constructor() {
    super('electric guitar', 4);
  }

  sound(): string {
    return 'Twang';
  }
}
