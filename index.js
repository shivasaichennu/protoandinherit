

//Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype

// let parent = {
//     firstname:"sainath",
//     rollno:"13bk5a0216",
//     class:"b-tech",
//     habbit:"playingcricket",

// };

// let child = {
//     fisrtname:"srinath",
//     job:"developer",

// }
// child.__proto__ = parent;
// console.log(child["rollno"]);
// console.log(child.firstname);
// console.log(parent.class);
// console.log(child[habbit]);


// Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays

// let arr = [21,32,44,57,76]
// let arr2 = arr.reduce((acc,curr)=>{
//     acc+=curr
//     return acc;
// },0)
// console.log(arr2);

// Write a JavaScript function to retrieve all the names of object's own and inherited properties.

let parent = {
    firstname:"sainat",
    father:"sangappa",
    house:"yes",
}

let child = {
    study:"Inter",
    poneno:7702337892489,
}
child.__proto__= parent;

for(let key in child){
    if(child.hasOwnProperty(key))
    console.log(key,"ownproperty");
    else{
        console.log(key,"inherited property");
    }
}