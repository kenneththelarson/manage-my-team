const { expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

jest.mock('../lib/Engineer.js');

test('creates an engineer object', () => {
    const engineer = new Engineer();

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.officeNumber).toEqual(expect.any(Number));
    expect(engineer.role).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});