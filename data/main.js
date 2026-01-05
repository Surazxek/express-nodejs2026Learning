/*1. Variables
* Memory elements where we can store data= dadta storage

* var(dont't use normally), let, const
*/

// Variable can be decleared only once in const
const name = "Ram";

// name = Jack  it will show error we cant change


//in let we can use multiple times
let age = 20;

age = 21;

age = 22

console.log(age)

/*
1. Conditional Statement
* if--else
* Switch
*/ 

// if(age > 50){
//     console.log("yes age is greater")

// } else {
//     console.log("Age is smaller")
// }


//switch
const dayNumber = "Sunday";

switch(dayNumber){
  case "Monday":
    console.log("Start of the week");
    break;
  case "Tuesday":
    console.log("Second day");
    break;
  case "Sunday":
    console.log("Weekend vibes!");
    break;
  default:
    console.log("Unknown day");
    break;
}

/*
* 3. Loops
* Run the code repetedly
*/

// for loop
for (let i= 0; i<=10; i++){
    // console.log(i)
}

//While Loop
let i = 0;
while(i<=10){
    // console.log(i)
    i = i+2
}

//Array -list
// counts starts from zero

const myArray = [90, "hello", true, "Sam"]
const mark = [40, 20, 53, 65, 98, 40 ,20]
console.log(mark[2])

// Objects - Collection of  data with key and value pairs

const student = {
    name: "Hari",
    class: 10,
    age: 18,
    address: "KTM",

}

console.log(student["address"])
console.log(student.class)

// function

function sum(a,b){
    return a+b
}

const sumX =(a,b)=>{
    return a+b
}
const aa = sum(2,1)
const a = sum(2,1)
console.log(a)

function square(a){
    return a*a
    
}
const b = square(7)
console.log(b)


