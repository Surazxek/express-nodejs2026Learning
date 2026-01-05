//ES6 -- JS 

//1.Destructing

const user = {
    name: "Ram",
    age: 20,
    phone: 9808239481
}
console.log(user.name, user.age, user.phone)

const {name,age,phone} = user;
console.log(name,age, phone)

const details = "hellow my name is " + name + " and i am " + age + "years old."
console.log(details) 
 
const tDetails = `Hello my name is ${name} and i am ${age} years old`

//array ma chai position matter garxa 

const marks = [20, 50, 60]
const[science, computer, english] = marks
console.log(science, computer, english)

//Spread operator (Object/Array) // Copy the data

const student = {
    name: "Hari",
    class: 10,
}

const result = {
    science: 90,
    math: 50,
    english: 80,
}

const finalresult = {...student,...result}
console.log(finalresult)

// Higher order array methods

const numbers = [90, 52, 5641, 62, 8, 352, 32, 835, 32, 561];
for (let i=0; i<numbers.length; i++){
    console.log(numbers[i] +5)
}
//1.Map
//[x,x,x]=>[y,y,y]
numbers.map((num)=>console.log(num +5))
//2. Filter
// [x,y,x] => [x,x]
console.log("===============================")
numbers.filter((num)=>console.log(num/2 ))
const filteredNumber = numbers.filter((num)=> num>100)
console.log(filteredNumber)
//3. sort -- asc, desc
console.log("sorted")
const sortedNumber = numbers.sort((a,b)=>a-b)
console.log(sortedNumber)
