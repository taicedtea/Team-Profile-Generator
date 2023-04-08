const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML');
const Manager  = require('./lib/Manager')
const Engineer  = require('./lib/Engineer')
const Intern  = require('./lib/Intern')

//empty array for employees, to be populated by fns
const employeeArray = [];

//manager generator function
function generateManager () {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter the manager\'s name',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter their ID number',
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
        console.log(manager);
    });
};

function newEmployee () {
    return inquirer.prompt([
        {
            type: "list",
            name: "employeeType",
            message: "Please choose your employee's role",
            choices: ["Engineer", "Intern"],
        },
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
            when: (input) => input.employeeType === 'Engineer'
        },
        {
            type: 'input',
            name: 'school',
            message: 'Please enter their school name',
            when: (input) => input.employeeType === 'Intern'
        },
        {
            type: 'confirm',
            name: 'addEmployee',
            message: 'Would you like to add more employees?',
            default: true
          },
    ]) .then ((empData) => {
        let employee; 
        let {name, id, email, employeeType, github, school} = empData;

        if (employeeType === 'Engineer') {
            employee = new Engineer(name, id, email, employeeType, github);
            console.log(employee);
        }
        else if (employeeType === 'Intern') {
            employee = new Engineer(name, id, email, employeeType, school);
            console.log(employee);
        }
        //pushes employee to employee array
        employeeArray.push(employee);

        //checks if user wants to add more employees
        if (addEmployee) {
            return newEmployee(employeeArray)
        } return employeeArray;
    });
};

const writeFile = (data) => {
    fs.writeFile('./dist/index.html', data, (err) => {
        if (err) {
            console.log(err);
            return
        } else {
            console.log("Your team's profile has been created! Check the index.html in dist folder.");
        }
    });
}


generateManager()
    .then(newEmployee)
    .then((employeeArray) => {
        return generateHTML(employeeArray);
    })
    .then((html) => {
        return writeFile(html);
    });