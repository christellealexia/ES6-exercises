function extractUser (obj){
let person = {
    name : "Chichi",
    Occupation :"Engineer",
    Age : 22

}
let {Occupation,name} = person;
return {Occupation,name};
}
console.log(extractUser ());