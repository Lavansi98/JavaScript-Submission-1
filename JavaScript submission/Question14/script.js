function findCommonElements(arr1,arr2){
    return arr1.filter(num => arr2.includes(num));
}
console.log(findCommonElements([1,2,3],[3,4,5]));