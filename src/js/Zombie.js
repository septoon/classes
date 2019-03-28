import Character from './CharacterBase';

class Zombie extends Character {
  constructor(name) {
    super(name);
    this.type = 'Zombie';
    this.attack = 40;
    this.defence = 10;
  }
}
export default Zombie;
