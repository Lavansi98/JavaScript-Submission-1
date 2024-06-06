const words = ["hello","world","javascript"];
const concatenatesWords = words.reduce((prevValue,currValue)=>{
    return prevValue + " " + currValue;
});
console.log(concatenatesWords);