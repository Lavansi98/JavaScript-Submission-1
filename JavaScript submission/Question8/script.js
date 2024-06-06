const students = [
    {name : 'Alice', grade : 90 },
    {name : 'Bob', grade : 70 },
    {name : 'Charlie', grade : 85 },
];
const getHighGrade = [];
for (let i = 0; i<students.length; i++){
    if (students[i].grade >80){
        getHighGrade.push(students[i].name + ":" + students[i].grade);
    }
}
console.log(getHighGrade);