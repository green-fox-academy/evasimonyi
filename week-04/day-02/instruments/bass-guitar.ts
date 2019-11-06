import StringedInstrument from './string-instruments';

export default class BassGuitar extends StringedInstrument {
  constructor() {
    super('bass guitar', 4);
  }

  sound(): string {
    return 'Duum-duum-duum';
  }
}
