import Team from './team';
import { Bowman, Swordsman } from './classes';

test('Adding one', () => {
  const team = new Team();
  const character = new Bowman('Hero');
  expect(team.add(character)).toEqual('Hero added!');
});

test('Adding one more', () => {
  const team = new Team();
  const character = new Bowman('Hero');
  team.add(character);
  expect(() => team.add(character)).toThrow('Already there');
});

test('Adding all characters & set to array', () => {
  const characterFirst = new Bowman('Hero');
  const characterSecond = new Swordsman('Hero');
  const team = new Team();
  const result = new Set().add(characterFirst).add(characterSecond);
  expect(team.addAll(characterFirst, characterSecond)).toEqual(result);
  expect(team.toArray()).toEqual(Array.from(result));
});
