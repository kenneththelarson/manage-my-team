const { expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

jest.mock('../lib/Manager.js');

test('creates a manager object', () => {
    const manager = new Manager();

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
    expect(manager.role).toEqual(expect.any(String));

    console.log(manager.role);
});