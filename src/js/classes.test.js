import {
  Bowman, Swordsman, Magician, Undead, Zombie, Daemon,
} from './classes';

test('Bowman', () => {
  const expected = {
    name: 'Hero',
    level: 1,
    health: 100,
    type: 'Bowman',
    attack: 25,
    defence: 25,
  };
  expect(new Bowman('Hero')).toEqual(expected);
});

test('Swordsman', () => {
  const expected = {
    name: 'Hero',
    level: 1,
    health: 100,
    type: 'Swordsman',
    attack: 40,
    defence: 10,
  };
  expect(new Swordsman('Hero')).toEqual(expected);
});

test('Magician', () => {
  const expected = {
    name: 'Hero',
    level: 1,
    health: 100,
    type: 'Magician',
    attack: 10,
    defence: 40,
  };
  expect(new Magician('Hero')).toEqual(expected);
});

test('Undead', () => {
  const expected = {
    name: 'Hero',
    level: 1,
    health: 100,
    type: 'Undead',
    attack: 25,
    defence: 25,
  };
  expect(new Undead('Hero')).toEqual(expected);
});

test('Zombie', () => {
  const expected = {
    name: 'Hero',
    level: 1,
    health: 100,
    type: 'Zombie',
    attack: 40,
    defence: 10,
  };
  expect(new Zombie('Hero')).toEqual(expected);
});

test('Daemon', () => {
  const expected = {
    name: 'Hero',
    level: 1,
    health: 100,
    type: 'Daemon',
    attack: 10,
    defence: 40,
  };
  expect(new Daemon('Hero')).toEqual(expected);
});
