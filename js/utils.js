
export default function employees() {
    return (
        <>
        <div class="card">
            <img src={employees.imageSrc} alt={employees.name + `Profile`} class="employee-profile"/>
            <h3 class="employee-name">${employees.name}</h3>
            <p>${employees.position}</p>
            <p>${employees.email}</p>
        </div>
        </>
    );
}