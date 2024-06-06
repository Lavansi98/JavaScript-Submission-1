const array = [4, "hello", 3 , true, "Uki", 5];
let sumSq = 0;
for (const item of array){
    if (typeof item == 'number'){
        sumSq = sumSq + item **2;
    }
}
console.log(sumSq);