function updateEmployeeRecord(employee,updates){
    return {name:employee.name, position:updates.position,salary:updates.salary};
}   
const employee = {name:'john', position:'developer', salary:'50000'};
const updates = {position:'Senior developer', salary:'60000'};
console.log(updateEmployeeRecord(employee,updates));
