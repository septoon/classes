import Bowman from '../src/js/Bowman';
import Swordsman from '../src/js/Swordsman';
import Magician from '../src/js/Magician';
import Daemon from '../src/js/Daemon';
import Undead from '../src/js/Undead';
import Zombie from '../src/js/Zombie';

test('Bowman test', () => {
  const received = new Bowman('Лучник');
  const expected = {
    name: 'Лучник', level: 1, health: 50, type: 'Bowman', attack: 25, defence: 25,
  };

  expect(received).toEqual(expected);
});

test('Swordsman test', () => {
  const received = new Swordsman('Мечник');
  const expected = {
    name: 'Мечник', level: 1, health: 50, type: 'Swordsman', attack: 40, defence: 10,
  };

  expect(received).toEqual(expected);
});

test('Magician test', () => {
  const received = new Magician('Маг');
  const expected = {
    name: 'Маг', level: 1, health: 50, type: 'Magician', attack: 10, defence: 40,
  };

  expect(received).toEqual(expected);
});

test('Daemon test', () => {
  const received = new Daemon('Демон');
  const expected = {
    name: 'Демон', level: 1, health: 50, type: 'Daemon', attack: 10, defence: 40,
  };

  expect(received).toEqual(expected);
});

test('Undead test', () => {
  const received = new Undead('Нежить');
  const expected = {
    name: 'Нежить', level: 1, health: 50, type: 'Undead', attack: 25, defence: 25,
  };

  expect(received).toEqual(expected);
});

test('Zombie test', () => {
  const received = new Zombie('Зомби');
  const expected = {
    name: 'Зомби', level: 1, health: 50, type: 'Zombie', attack: 40, defence: 10,
  };

  expect(received).toEqual(expected);
});
