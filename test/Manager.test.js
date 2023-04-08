const Manager = require('../lib/Manager');

describe('Manager', () => {
    let manager;
    //create instance of employee before each test
    beforeEach(() => {
        manager = new Manager('Jane Doe', '1', 'jd1@example.com', '123');
    });

    it('Should have a  name, id, email and github', () => {
        expect(manager.name).toBe('Jane Doe');
        expect(manager.id).toBe('1');
        expect(manager.email).toBe('jd1@example.com');
        expect(manager.officeNumber).toBe('123');
    });

    it('Should have a getName method that returns the name', () => {
        expect(manager.getName()).toBe('Jane Doe');
    });

    it('Should have a getId method that returns the id', () => {
        expect(manager.getId()).toBe('1');
    });

    it('Should have a getEmail method that returns the email', () => {
        expect(manager.getEmail()).toBe('jd1@example.com');
    });
    
    it('Should have a getOfficeNumber method that returns the manager\'s office number', () => {
        expect(manager.getOfficeNumber()).toBe('123');
    });

    it('Should have a getRole method that returns \'Manager\'', () => {
        expect(manager.getRole()).toBe('Manager');
    });
})