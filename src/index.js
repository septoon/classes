import {
  Bowman, Swordsman, Magician, Daemon, Undead, Zombie,
} from './js/constructor';

const bowman = new Bowman('Лучник');
const swordsman = new Swordsman('Мечник');
const magician = new Magician('Маг');
const daemon = new Daemon('Демон');
const undead = new Undead('Нежить');
const zombie = new Zombie('Зомби');
/* eslint-disable no-console */
console.log(bowman);
console.log(swordsman);
console.log(magician);
console.log(daemon);
console.log(undead);
console.log(zombie);
