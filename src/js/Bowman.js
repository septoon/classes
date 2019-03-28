import Character from './CharacterBase';

class Bowman extends Character {
  constructor(name) {
    super(name);
    this.type = 'Bowman';
    this.attack = 25;
    this.defence = 25;
  }
}
export default Bowman;
