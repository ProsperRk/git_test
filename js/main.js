const employeeContainer = document.querySelector(".employee-container");

const employees = [
    {
        name: 'John Doe',
        imageSrc : './img/prof1.jpeg',
        position : 'School Principle',
        email : 'johndoe@gmail.com'
    },
    {
        name: 'Rose Mae',
        imageSrc : './img/img2.jpeg',
        position : 'Teacher',
        email : 'rosemae@gmail.com'
    },
    {
        name: 'Ann Lucy',
        imageSrc : './img/img3.jpeg',
        position : 'School Dean',
        email : 'annluc@gmail.com'
    }

];



employees.forEach((employee) => {
    employeeContainer.innerHTML += `
    <div class="employee-card">
        <img src="${employee.imageSrc}" alt="${employee.name}'s photo" width="200px" height="200px">
        <h3 class="employee-name">${employee.name}</h3>
        <p class="employee-position">
            ${employee.position}
        </p>
        <p class="employee-email">${employee.email}</p>
   </div>
    `;
});