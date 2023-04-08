const inquirer = require('inquirer');
const fs = require('fs');
//const generateHTML = require('./src/generateHTML');
const Manager  = require('./lib/Manager')
const Engineer  = require('./lib/Engineer')
const Intern  = require('./lib/Intern')

//empty array for employees, to be populated by fns
const employeeArray = [];

const generateHTML = (arr) => {
    let employeeCards = ``
    arr.forEach(
        function (employee) {
            if (employee.getRole() === 'Manager') {
                employeeCards +=
                    `<div class="card m-2" style="width: 18rem;">
                        <div class="card-header">
                            <h3>${employee.name}</h3>
                            <p class="fs-5">Manager</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${employee.id}</li>
                            <li class="list-group-item">Email: ${employee.email}</li>
                            <li class="list-group-item">Office Number: ${employee.officeNum}</li>
                        </ul>
                    </div>`
            } else if (employee.getRole() === 'Engineer') {
                employeeCards += 
                `<div class="card m-2" style="width: 18rem;">
                    <div class="card-header">
                        <h3>${employee.name}</h3>
                        <p class="fs-5">Engineer</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${employee.id}</li>
                        <li class="list-group-item">Email: ${employee.email}</li>
                        <li class="list-group-item">github: ${employee.github}</li>
                    </ul>
                </div>`
            } else {
                employeeCards += `
                <div class="card m-2" style="width: 18rem;">
                    <div class="card-header">
                        <h3>${employee.name}</h3>
                        <p class="fs-5">Intern</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${employee.id}</li>
                        <li class="list-group-item">Email: ${employee.email}</li>
                        <li class="list-group-item">School: ${employee.school}</li>
                    </ul>
                </div>`
            }
        }
    )
    
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-aFq/bzH65dt+w6FI2ooMVUpc+21e0SRygnTpmBvdBgSdnuTN7QbdgL+OapgHtvPp" crossorigin="anonymous">
            <link href="./style.css" rel="stylesheet">
            <title>Employees</title>
        </head>
        <body>
            <div class="container-fluid p-0">
                <nav class="col-12 p-4 bg-success text-center">
                    <h1 class="text-white">Company Name</h1>
                </nav>
                <div class="container d-flex flex-row flex-wrap justify-content-evenly mt-4">
                    ${employeeCards}
                </div>
            </div>
        </body>
        <script src="https://code.jquery.com/jquery-3.6.1.min.js"></script>
        <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    </html>
    `;
};

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
            case 'Finished': 
                fs.writeFile('./dist/index.html', generateHTML(employeeArray), (err) => 
                err?console.log(err):console.log('Success! Check \'index.html\' under the \'dist\' folder.'))
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
            validate: (name) => {
                if (name) {
                  return true;
                } else {
                  console.log("Please enter the name of this employee");
                  return false;
                }
              },
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter their ID number',
            validate: (id) => {
                if (!isNaN(id)) {
                  return true;
                } else {
                  console.log("Please enter a valid ID number");
                  return false;
                }
              },
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter their email',
            //checks if valid email
            validate: (email) => {
                const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
                if (valid) {
                  return true;
                } else {
                  console.log("Please enter a valid email!");
                  return false;
                }
              },
        },
        {
            type: 'input',
            name: 'officeNum',
            message: 'Please enter their office number',
            validate: (id) => {
                if (!isNaN(id)) {
                  return true;
                } else {
                  console.log("Please enter a valid office number");
                  return false;
                }
              },
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
            validate: (name) => {
                if (name) {
                  return true;
                } else {
                  console.log("Please enter the name of this employee");
                  return false;
                }
              },
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter their id number',
            validate: (id) => {
                if (!isNaN(id)) {
                  return true;
                } else {
                  console.log("Please enter a valid ID number");
                  return false;
                }
              },
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter their email',
            //checks if valid email
            validate: (email) => {
                const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
                if (valid) {
                    return true;
                } else {
                    console.log("Please enter a valid email");
                    return false;
                }
                },
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter their github profile name',
            validate: (github) => {
                if (github) {
                  return true;
                } else {
                  console.log("Please enter the github profile name of this engineer");
                  return false;
                }
              },
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
            validate: (name) => {
                if (name) {
                  return true;
                } else {
                  console.log("Please enter the name of this employee");
                  return false;
                }
              },
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter their id number',
            validate: (id) => {
                if (!isNaN(id)) {
                  return true;
                } else {
                  console.log("Please enter a valid ID number");
                  return false;
                }
              },
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter their email',
            //checks if valid email
            validate: (email) => {
                const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
                if (valid) {
                    return true;
                } else {
                    console.log("Please enter a valid email");
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'school',
            message: 'Please enter their school name',
            validate: (school) => {
                if (school) {
                  return true;
                } else {
                  console.log("Please enter the name of the school");
                  return false;
                }
              },
            
        },
    ]).then (newIntern => {
        const {name, id, email, school} = newIntern;
        const intern = new Intern (name, id, email, school);
        //pushes employee to array
        employeeArray.push(intern);
        generateEmployees();
    })
}

//calls to generate first employee
generateEmployees()
