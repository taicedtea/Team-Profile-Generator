const Intern = require('../lib/Intern');

describe('Intern', () => {
    let intern;
    //create instance of employee before each test
    beforeEach(() => {
        intern = new Intern('Jane Doe', '1', 'jd1@example.com', 'randomSchool');
    });

    it('Should have a  name, id, email and github', () => {
        expect(intern.name).toBe('Jane Doe');
        expect(intern.id).toBe('1');
        expect(intern.email).toBe('jd1@example.com');
        expect(intern.school).toBe('randomSchool');
    });

    it('Should have a getName method that returns the name', () => {
        expect(intern.getName()).toBe('Jane Doe');
    });

    it('Should have a getId method that returns the id', () => {
        expect(intern.getId()).toBe('1');
    });

    it('Should have a getEmail method that returns the email', () => {
        expect(intern.getEmail()).toBe('jd1@example.com');
    });
    
    it('Should have a getSchool method that returns the intern\'s school', () => {
        expect(intern.getSchool()).toBe('randomSchool');
    });

    it('Should have a getRole method that returns \'Intern\'', () => {
        expect(intern.getRole()).toBe('Intern');
    });
})