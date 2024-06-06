function addTask(tasks,newTask){
        tasks.push(newTask);
        return tasks;
}

const tasks=['Buy groceries', 'clean the house'];
console.log(addTask(tasks,'Pay bills'));
