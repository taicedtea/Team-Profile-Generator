const newManagerCard = (manager) => {
    return `
    <div class="card m-2" style="width: 18rem;">
        <div class="card-header">
            <h3>${manager.name}</h3>
            <p class="fs-5">Manager</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.id}</li>
            <li class="list-group-item">Email: ${manager.email}</li>
            <li class="list-group-item">Office Number: ${manager.officeNum}</li>
        </ul>
    </div>
    `;
}

const newEngineerCard = (engineer) => {
    return `
    <div class="card m-2" style="width: 18rem;">
        <div class="card-header">
            <h3>${engineer.name}</h3>
            <p class="fs-5">Engineer</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.id}</li>
            <li class="list-group-item">Email: ${engineer.email}</li>
            <li class="list-group-item">github: ${engineer.github}</li>
        </ul>
    </div>
    `;
}

const newInternCard = (intern) => {
    return `
    <div class="card m-2" style="width: 18rem;">
        <div class="card-header">
            <h3>${intern.name}</h3>
            <p class="fs-5">Intern</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.id}</li>
            <li class="list-group-item">Email: ${intern.email}</li>
            <li class="list-group-item">School: ${intern.school}</li>
        </ul>
    </div>
    `;
}

const populateCards = (data) => {
    const cards = [];
    for (let i; i < data.length; i++) {
        if (data[i].getRole() === 'Manager') {
            const managerCard = newManagerCard(data[i]);
            cards.push(managerCard)
        }
        if (data[i].getRole() === 'Engineer') {
            const engineerCard = newEngineerCard(data[i]);
            cards.push(engineerCard)
        }
        if (data[i].getRole() === 'Intern') {
            const internCard = newInternCard(data[i]);
            cards.push(internCard)
        }
    };
    const employeeCards = cards.join('')
    const finalCards = generatedHTML(employeeCards)
    return finalCards;
};

const generateHTML = (employeeCards) => {
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

module.export = generateHTML;