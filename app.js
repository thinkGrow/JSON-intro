let person = {
    name : 'hena',
    age : 10,
    friends : ["hero alam", "korim"],
    status : true,
}

console.log("pre-conversion: ", person);

person = JSON.stringify(person)
console.log("objecet to json: ", person);

person = JSON.parse(person)

console.log("json to object: ", person);





