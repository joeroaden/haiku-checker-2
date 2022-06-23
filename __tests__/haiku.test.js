import { Haiku } from './../src/haiku.js';

describe('Haiku', () => {

  test('It should create a Haiku object with a string of text', () => {
    const newHaiku = new Haiku("I am a haiku example");
    expect(newHaiku.line1).toEqual("I am a haiku example");
  });

  test('It should create a Haiku object with 3 strings of text', () => {
    const newHaiku = new Haiku("An ocean voyage", "As waves break over the bow", "The sea welcomes me");
    expect(newHaiku.line1).toEqual("An ocean voyage");
    expect(newHaiku.line2).toEqual("As waves break over the bow");
    expect(newHaiku.line3).toEqual("The sea welcomes me");
  });

  test('It should determine if there are 3 lines in the Haiku object', () => {
    const notHaiku = new Haiku("An ocean voyage", "As waves break over the bow", "");
    expect(notHaiku.lineChecker()).toEqual("This is not a haiku");
  });
});