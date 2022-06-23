import { Haiku } from './../src/haiku.js';

describe('Haiku', () => {
  test('It should create a Haiku object with a string of text', () => {
    const haiku = new Haiku("I am a haiku example");
    expect(haiku.text).toEqual("I am a haiku example");
  });
});