import Character from './CharacterBase';

class Undead extends Character {
  constructor(name) {
    super(name);
    this.type = 'Undead';
    this.attack = 25;
    this.defence = 25;
  }
}
export default Undead;
