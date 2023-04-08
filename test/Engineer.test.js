const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    let engineer;
    //create instance of employee before each test
    beforeEach(() => {
        engineer = new Engineer('Jane Doe', '1', 'jd1@example.com', 'janeDoe');
    });

    it('Should have a  name, id, email and github', () => {
        expect(engineer.name).toBe('Jane Doe');
        expect(engineer.id).toBe('1');
        expect(engineer.email).toBe('jd1@example.com');
        expect(engineer.github).toBe('janeDoe');
    });

    it('Should have a getName method that returns the name', () => {
        expect(engineer.getName()).toBe('Jane Doe');
    });

    it('Should have a getId method that returns the id', () => {
        expect(engineer.getId()).toBe('1');
    });

    it('Should have a getEmail method that returns the email', () => {
        expect(engineer.getEmail()).toBe('jd1@example.com');
    });
    
    it('Should have a getGithub method that returns the engineer\' github username', () => {
        expect(engineer.getGithub()).toBe('janeDoe');
    });

    it('Should have a getRole method that returns \'Engineer\'', () => {
        expect(engineer.getRole()).toBe('Engineer');
    });
})