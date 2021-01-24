const Intern = require('../lib/Intern');

jest.mock('../lib/Intern.js');

test('creates an intern object', () => {
    const intern = new Intern();

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.officeNumber).toEqual(expect.any(Number));
    expect(intern.role).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));

    console.log(intern);
});