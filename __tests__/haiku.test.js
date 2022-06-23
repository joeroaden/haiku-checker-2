import { Haiku } from './../src/haiku.js';

describe('Haiku', () => {
  test('It should create a Haiku object with a string of text', () => {
    const newHaiku = new Haiku("I am a haiku example");
    expect(newHaiku.passage).toEqual("I am a haiku example");
  });
});