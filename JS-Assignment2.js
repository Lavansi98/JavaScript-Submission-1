/*Q1:Given an array of objects representing transactions, write a function to group
transactions by type.*/
let transactions = [
    { type: "deposit", amount: 100 },
    { type: "withdrawal", amount: 50 },
    { type: "deposit", amount: 200 },
    { type: "withdrawal", amount: 30 }
    ];
function groupByType(transactions) {
let grouped = {};
transactions.forEach(transaction=>{
    let type = transaction.type;
    if (!grouped[type]){
        grouped[type]=[]
    }
    grouped[type].push(transaction);
    })
    return grouped;
}
console.log(groupByType(transactions));
    //  Output: { deposit: [{ type: "deposit", amount: 100 }, { type: "deposit",
    // amount: 200 }], withdrawal: [{ type: "withdrawal", amount: 50 }, { type:
    // "withdrawal", amount: 30 }] }


// /*Q2:You have an array of objects representing employees. Write a function to filter out
// employees who are older than a given age.*/
let employees = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 35 },
    { name: "Charlie", age: 30 }
];
let ageLimit = 30;
function filterEmployees(employees, ageLimit) {
   const filterEmp = employees.filter((employee)=> employee.age<=ageLimit);
   return filterEmp;
}
console.log(filterEmployees(employees, ageLimit));
// Output: [{ name: "Alice", age: 25 }, { name: "Charlie", age: 30 }]


/*Q3:Given a 2D array representing a list of student names in different classes, write a
function to check if there are any duplicate names across all classes.
(Specifically use JavaScript Set Objects)*/
let classes = [
    ["Alice", "Bob", "Charlie"],
    ["David", "Alice", "Eve"],
    ["Frank", "George", "Bob"]
];
function checkDuplicates(classes) {
let nameSet = new Set();
    for (let arr1 of classes){
        for (let arr2 of arr1){
            if (nameSet.has(arr2)){
                return true;
            }else{
                nameSet.add(arr2);
            }
        }
    }
    return false;
}

console.log(checkDuplicates(classes));
// Output: true


/*Q4:Write a function to get the current date and time in the format YYYY-MM-DD HH:MM:SS.
(Hint: Use Date object in JavaScript)*/
function getCurrentDateTime(){
    const d = new Date();
    const year = d.getFullYear();
    const month = d.getMonth()+1;
    const date = d.getDate();
    const hours = d.getHours();
    const minutes = d.getMinutes();
    const seconds = d.getSeconds();

    return `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
}
console.log(getCurrentDateTime());


/*Q5:Write a function that takes a birthdate as input and calculates the person's age.*/
function calculateAge(birthdate) {
    const dateOfBirth = new Date(birthdate);
    const now = new Date();
    let yearDifferenc = now.getFullYear() - dateOfBirth.getFullYear();
    let monthDifference = now.getMonth() - dateOfBirth.getMonth();
    let dateDifference = now.getDate() - dateOfBirth.getDate();
    
    return `Calculated Age is :  ${yearDifferenc}years-${monthDifference}-months-${dateDifference}days`
}
console.log(calculateAge("1990-06-15"));


/*Q6:Write a function that takes a date and a number of days as input and returns the new
date after adding the specified number of days.*/
function addDays(date, days) {
    let d = new Date(date);
    d.setDate(d.getDate()+days);
    return d;
}
console.log(addDays("2022-06-15", 10));


/*Q7:Write a function that calculates the number of days between two given dates.
(Hint: use Math function in JavaScrpt & Date object to write the function)*/
function dateDifference(date1, date2) {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    const timeDiff = Math.abs(d2-d1);
    const dayDiff = Math.ceil(timeDiff/(1000*60*60*24));
    return dayDiff;
}
 console.log(dateDifference("2022-06-15", "2023-06-15")); // output: 365


/*Q8:Suppose you are developing a web application that allows users to set and retrieve their
preferences. Use a Map to store user preferences, and write functions to set a
preference and get a preference by key.*/
let userPreferences = new Map();
function setPreference(key, value) {
    userPreferences.set(key, value);
}
function getPreference(key) {
    return userPreferences.get(key);
}
setPreference("theme", "dark");
setPreference("fontSize", "16px");
console.log(getPreference("theme")); // Output: dark
console.log(getPreference("fontSize")); // Output: 16px


/*Q9:Write a function that takes an array of strings and returns a Map where the keys are the
unique strings and the values are the number of times each string appears in the array.
(Use Map Object)*/
function countOccurrences(arr) {
    let countFruits = new Map();
    for (let fruit of arr){
        if (countFruits.has(fruit)){
            countFruits.set(fruit,countFruits.get(fruit)+1);
        }else{
            countFruits.set(fruit,1);
        }
    }
return countFruits;
}
// Example usage:
let strings = ["apple", "banana", "apple", "orange", "banana", "apple"];
console.log(countOccurrences(strings));
// Output: Map { 'apple' => 3, 'banana' => 2, 'orange' => 1 };


/*Q10:You are given an array of employee objects with id and name properties. Write a
function to create a Map that maps employee IDs to their names.*/
let employeeS = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
];
function mapEmployeeIdsToNames(employeeS) {
    let employeeMap = new Map();
    employeeS.forEach(employee => {
        employeeMap.set(employee.id, employee.name);
    });
return employeeMap;
}
let employeeMap = mapEmployeeIdsToNames(employeeS);
console.log(employeeMap);
// Output: Map { 1 => 'Alice', 2 => 'Bob', 3 => 'Charlie' }


/*Q11:Write a function to manage inventory for a store using a Map. The Map should store item
names as keys and their quantities as values. Provide functions to add new items,
update item quantities, and check the quantity of an item.*/
let inventory = new Map();
function addItem(itemName, quantity){
    inventory.set(itemName, quantity);
// use Map Object's set method to add the item to the inventory
}
function updateItemQuantity(itemName, quantity) {
    if (inventory.has(itemName)){
        inventory.set(itemName,inventory.get(itemName)+quantity)
    }else{
        console.log("Item not found")
    }
// use Map Object's has, set, get methods to update the quantity
// check if the item exists in the inventory
// if exists, update the quantity
// if not, console log the message "Item not found"
}
function checkItemQuantity(itemName) {
    return inventory.get(itemName);
// check item quantity in the inventory
}
addItem("apple", 100);
addItem("banana", 150);
updateItemQuantity("apple", 50);
console.log(checkItemQuantity("apple")); // Output: 150
console.log(checkItemQuantity("banana")); // Output: 150


/*12:Write a function that takes an array of numbers and returns a new array with all duplicate
items removed. (Use Set Object)*/
function removeDuplicates(arr) {
    set1 = new Set(arr);
    return set1;
}
let numbers = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(numbers));
// Output: [1, 2, 3, 4, 5]


/*13:Write a function that takes two arrays and returns a new array containing only the
elements that are present in both arrays.
(use Set object)*/
function intersection(arr1, arr2) {
    let set1 = new Set(arr1);
    let set2 = new Set(arr2);
    let arr =[];
    set1.forEach(num=>{
        if (set2.has(num)){
            arr.push(num);
        }
    })
return arr;
}
let aarray1 = [1, 2, 3, 4];
let aarray2 = [3, 4, 5, 6];
console.log(intersection(aarray1, aarray2));
// Output: [3, 4]


/*Q14:Write a function that takes multiple arrays and returns a new array containing all unique
elements from all arrays.*/
function union(...arrays) {
    let resultSet = new Set();
    arrays.forEach(arr=>{
        arr.forEach(newArr=>{
            console.log(newArr);
            resultSet.add(newArr);
        })
    })
    return Array.from(resultSet)
}
let array1 = [1, 2, 3];
let array2 = [3, 4, 5];
let array3 = [5, 6, 7];
console.log(union(array1, array2, array3));
// Output: [1, 2, 3, 4, 5, 6, 7]


/*Q15:Write a function that takes an array of items and a set, and removes all items in the
array from the set.*/
function removeItemsFromSet(items, set) {
    for (let num of items){
        set.delete(num);
    }
}
let mySet = new Set([1, 2, 3, 4, 5]);
let itemsToRemove = [2, 3];
removeItemsFromSet(itemsToRemove, mySet);
console.log([...mySet]); // Output: [1, 4, 5]


/*Q16:Write a function that takes an array of student names representing attendance on a
particular day and a Set representing the overall attendance. Update the Set with the
new attendance and return the updated Set.*/
function updateAttendance(newAttendance, overallAttendance) {
    for (const updateName of newAttendance){
       overallAttendance.add(updateName);
       return overallAttendance;
    } 
}
let overallAttendance = new Set(["Alice", "Bob"]);
let todayAttendance = ["Charlie", "Alice"];
overallAttendance = updateAttendance(todayAttendance, overallAttendance);
console.log([...overallAttendance]);
// Output: ["Alice", "Bob", "Charlie"]