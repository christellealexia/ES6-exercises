let person ={
    firstName: 'John',
    lastName: 'Doe',
    age:28
};
let { firstName,lastName,middleName = '',age: currentAge=18} = person;
console.log(currentAge);