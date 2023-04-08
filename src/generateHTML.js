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
                employeeCards += `    <div class="card m-2" style="width: 18rem;">
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
                employeeCards += `    <div class="card m-2" style="width: 18rem;">
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

//odule.export = generateHTML;
export { generateHTML 