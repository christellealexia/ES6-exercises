let extractNumbers = (arr) => {
    let result = [];
    arr.forEach(item => {
        if (/[\d]/.test(item)){
            const words= item.replace(/\d+/g,'');
            const numbers= parseInt(item.match(/\d+/));
    result.push(words,numbers);
        }
        else {
            result.push(item)
        } 
    });
    
    return result;
}
const input = ["Hello123", "World456", "49", "Another789"];
const output = extractNumbers(input);

console.log(output);