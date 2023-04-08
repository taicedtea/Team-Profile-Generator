const Employee = require('../lib/Employee');

describe('Employee', () => {
    let employee;
    //create instance of employee before each test
    beforeEach(() => {
        employee = new Employee('Jane Doe', '1', 'jd1@example.com');
    });

    it('Should have a name, id, and email', () => {
        expect(employee.name).toBe('Jane Doe');
        expect(employee.id).toBe('1');
        expect(employee.email).toBe('jd1@example.com');
    });

    it('Should have a getName method that returns the name', () => {
        expect(employee.getName()).toBe('Jane Doe');
    });

    it('Should have a getId method that returns the id', () => {
        expect(employee.getId()).toBe('1');
    });

    it('Should have a getEmail method that returns the email', () => {
        expect(employee.getEmail()).toBe('jd1@example.com');
    });

    it('Should have a getRole method that returns \'Employee\'', () => {
        expect(employee.getRole()).toBe('Employee');
    });
});
