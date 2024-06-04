let ReversedObject = (obj) => {
    let newObj = Object.entries(obj);
    let reversedObject = newObj.reverse();
    let newestObj = Object.fromEntries(reversedObject);
    return newestObj;
}
const originalObj = {aa: "1", bf: "3", cq: "5"};
const reversedObj = ReversedObject(originalObj);
console.log(reversedObj); 