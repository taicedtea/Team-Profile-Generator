const inquirer = require('inquirer');
const fs = require('fs');
const generatedHTML = require('./src/generatedHTML');
const Manager  = require('./lib/Manager')
const Engineer  = require('./lib/Engineer')
const Intern  = require('./lib/Intern')

//empty array for employees, to be populated by fns
employeeArray = [];

//starting function to generate first employee
function generateEmployees () {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'employeeType',
            message: 'Please choose which type of employee you would like to add:',
            choices: ['Manager', 'Engineer', 'Intern', 'Finished'],
        },
    ]).then(function(choice) {
        switch(choice.employeeType) {
            case 'Manager': generateManager()
                break
            case 'Engineer': generateEngineer()
                break    
            case 'Intern': generateIntern()
                break  
            case 'Finished': createHTML()  
        }
    })
} 

//manager generator function
function generateManager () {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'employeeName',
            message: 'Please enter the manager\'s name',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter their id number',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter their email',
        },
        {
            type: 'input',
            name: 'officeNum',
            message: 'Please enter their office number',
        },
    ]).then (newManager => {
        const {name, id, email, officeNum} = newManager;
        const manager = new Manager (name, id, email, officeNum);
        //pushes employee to array
        employeeArray.push(manager);
        generateEmployees();
    })
}

//engineer generator function
function generateEngineer () {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter the engineers\'s name',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter their id number',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter their email',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter their github profile name',
        },
    ]).then (newEngineer => {
        const {name, id, email, github} = newEngineer;
        const engineer = new Engineer (name, id, email, github);
        //pushes employee to array
        employeeArray.push(engineer);
        generateEmployees();
    })
}

//intern generator function
function generateIntern () {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter the engineers\'s name',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter their id number',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter their email',
        },
        {
            type: 'input',
            name: 'school',
            message: 'Please enter their school name',
        },
    ]).then (newIntern => {
        const {name, id, email, school} = newIntern;
        const intern = new Intern (name, id, email, school);
        //pushes employee to array
        employeeArray.push(intern);
        generateEmployees();
    })
}

function createHTML() {
    fs.writeFile('./dist/index.html', populateCards(employeeArray), err => {
        if (err) {
            console.log(err);
        } console.log('Success!')
    })
}

//calls to generate first employee
generateEmployees();