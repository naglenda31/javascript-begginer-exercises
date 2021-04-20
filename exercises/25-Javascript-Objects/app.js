var person = {
    name: "John",                //String
    lastname: "Doe",
    age: 35,                     //Number
    gender: "male",
    lucky_numbers: [ 7, 11, 13, 17], //Array
    significant_other: person2   //Object, yes the same variable/object defined after
};

var person2 = {
    name: "Jane",
    lastname: "Doe",
    age: 38,
    gender: "female",
    lucky_numbers: [ 2, 4, 6, 8],
    significant_other: person
};

var family = {
    lastname: "Doe",
    members: [person, person2]   //Array of objects, don't forget to add Jimmy
};


function addAllFamilyLuckyNumbers(anArray){
  var sumOfAllLuckyNumbers = 0; //sumOfAllLuckyNumbers is a number, the sum of all lucky numbers.

    for(let i = 0; i < anArray.length; i++){

        for(let j = 0; j < anArray[i].lucky_numbers.length; j++){
        sumOfAllLuckyNumbers += anArray[i].lucky_numbers[j]
        }
    }
  //To-Do: loop and add; consider nested loops
  //Hint: use the anArray variable to get all of the lucky numbers
  
  return sumOfAllLuckyNumbers;
}

//Enter all your code here:
person.lucky_numbers[3] = 33; // this is the one used in class by Jonathan(teacher)
// person.lucky_numbers.splice(3,1,33) this one also works 
// console.log(person.lucky_numbers); this was to check previous command on line 41 worked

let person3 = {};

person3.name = "Jimmy";
person3.lastname = "Doe";
person3.age = 13;
person3.gender = "male";
person3.lucky_numbers = [ 1, 2, 3, 4];
person3.significant_other = null;

family.members.push(person3);
// console.log(family.members.length); this was to check line 54 works




//Do not make changes below:
console.log(addAllFamilyLuckyNumbers(family.members)); 