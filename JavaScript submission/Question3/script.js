const strings = ["hello","","world","","javascript"];
const newStr = [];
for (let i=0; i < strings.length; i++){
    if (strings[i] !== ""){
        newStr.push(strings[i]);
    }
}
console.log(newStr);