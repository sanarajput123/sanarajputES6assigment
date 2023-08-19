const pi = 3.14159265358979323846;

// Attempting to reassign will result in an error
// pi = 3.14; // This will cause an error


function sumOfSquares(numbers) {
    let total = 0; // Declare a variable using let in the function scope
    
    for (let i = 0; i < numbers.length; i++) {
      const square = numbers[i] * numbers[i]; // Declare a constant using const in the loop block scope
      total += square;
    }
    
    if (total > 10) {
      var message = "Total is greater than 10"; // Declare a variable using var in the block scope (not recommended in modern JS)
    }
    
    return total;
  }
  
  const numbersArray = [1, 2, 3, 4, 5];
  const result = sumOfSquares(numbersArray);
  
  console.log("Sum of squares:", result);
  // This will work due to variable hoisting with var, but it's not recommended
  


  const stringsArray = ["apple", "banana", "cherry", "date"];

for (let i = 0; i < stringsArray.length; i++) {
  const firstLetter = stringsArray[i][0]; // Access the first character of each string
  
  console.log("First letter of", stringsArray[i], "is", firstLetter);
}

// The variable 'firstLetter' is not accessible here due to block scope



function generateAsterisks(n) {
    const asterisk = "*"; // Declare a constant string with one asterisk
    
    let asteriskString = ""; // Initialize an empty string to build the asterisk sequence
    
    for (let i = 0; i < n; i++) {
      asteriskString += asterisk; // Append the asterisk to the string
    }
    
    return asteriskString;
  }
  
  const numberOfAsterisks = 5;
  const asterisks = generateAsterisks(numberOfAsterisks);
  
  console.log(asterisks); // Output: *****

  

  function generateGreeting(person) {
    var message; // Declare a function-scoped variable
    
    if (person.name && person.age) {
      message = "Hello, " + person.name + "! You are " + person.age + " years old.";
    } else {
      message = "Invalid person object.";
    }
    
    return message;
  }
  
  const personObject = {
    name: "Alice",
    age: 30
  };
  
  function createHTMLElement(tagName, text) {
    const htmlElement = `<${tagName}>${text}</${tagName}>`;
    return htmlElement;
  }
  
  const tagName = "p";
  const textContent = "Hello, world! This is a paragraph.";
  
  const htmlElement = createHTMLElement(tagName, textContent);
  
  console.log(htmlElement);
  
  
  function greetPerson(name, age) {
    const greeting = `Hello ${name}! It's nice to meet you. You're ${age} years old, right?`;
    return greeting;
}

// Example usage
const personName = "Alice";
const personAge = 30;
const message = greetPerson(personName, personAge);
console.log(message);




function calculateSumAndAverage(numbers) {
  const totalSum = numbers.reduce((sum, num) => sum + num, 0);
  const average = totalSum / numbers.length;
  
  const result = `The sum of the numbers is ${totalSum}, and the average is ${average.toFixed(2)}.`;
  return result;
}

// Example usage
const numberArray = [12, 24, 36, 48, 60];
const resultMessage = calculateSumAndAverage(numberArray);
console.log(resultMessage);



function getProductInfo(product) {
  const productInfo = `Product: ${product.name}\nPrice: $${product.price.toFixed(2)}\nQuantity: ${product.quantity}`;
  return productInfo;
}

// Example usage
const productObject = {
  name: "Widget",
  price: 19.99,
  quantity: 10
};

const infoMessage = getProductInfo(productObject);
console.log(infoMessage);



function formatDate(date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = date.getFullYear();
  
  const formattedDate = `${day}/${month}/${year}`;
  return formattedDate;
}

// Example usage
const inputDate = new Date(2023, 7, 11); // August 11, 2023
const formattedDateString = formatDate(inputDate);
console.log(formattedDateString);


function findPersonWithHighestScore(people) {
  const [firstPerson, ...restOfPeople] = people;

  let highestScore = firstPerson.score;
  let personWithHighestScore = firstPerson.name;

  for (const person of restOfPeople) {
    if (person.score > highestScore) {
      highestScore = person.score;
      personWithHighestScore = person.name;
    }
  }

  return personWithHighestScore;
}

const people = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Carol", score: 78 },
  { name: "David", score: 95 }
];

const highestScorer = findPersonWithHighestScore(people);
console.log(highestScorer); // Output will be the name of the person with the highest score



function getPersonInitials(person) {
  const { firstName, middleName = "", lastName } = person;

  const firstInitial = firstName[0];
  const middleInitial = middleName[0];
  const lastInitial = lastName[0];

  return `${firstInitial}${middleInitial}${lastInitial}`;
}

const personInfo = {
  firstName: "John",
  middleName: "Adam",
  lastName: "Doe"
};

const initials = getPersonInitials(personInfo);
console.log(initials); // Output will be the person's initials



function sumNumbers(a = 0, b = 0) {
  return a + b;
}

const result1 = sumNumbers(5, 7); // 5 + 7 = 12
const result2 = sumNumbers();    // 0 + 0 = 0
const result3 = sumNumbers(10);  // 10 + 0 = 10

console.log(result1); // Output: 12
console.log(result2); // Output: 0
console.log(result3); // Output: 10




function concatenateArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = concatenateArrays(array1, array2);

console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]




const numbers = [1, 2, 3, 4, 5];

// Using forEach with a regular function
numbers.forEach(function(number) {
  console.log(number * 2);
});

// Using forEach with an arrow function
numbers.forEach(number => {
  console.log(number * 2);
});



const getStringLength = (str) => str.length;

const inputString = "Hello, world!";
const length = getStringLength(inputString);
console.log(length); // Output: 13



const multiplyNumbers = (a, b) => a * b;

const num1 = 5;
const num2 = 7;
const product = multiplyNumbers(num1, num2);
console.log(product); // Output: 35



const createGreeting = name => `Hello, ${name}!`;

const userName = "Alice";
const greeting = createGreeting(userName);
console.log(greeting); // Output: "Hello, Alice!"



const getRandomNumber = () => Math.random();

const randomValue = getRandomNumber();
console.log(randomValue); // Output: A random number between 0 and 1



function calculateSquareWithDelay(number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const square = number * number;
      resolve(square);
    }, 1000); // 1000 milliseconds = 1 second
  });
}

const inputNumber = 5;
calculateSquareWithDelay(inputNumber)
  .then(result => {
    console.log(result); // Output: 25 (5 * 5)
  })
  .catch(error => {
    console.error(error);
  });



  function resolvePromises(promisesArray) {
    return Promise.all(promisesArray);
  }
  
  const promise1 = Promise.resolve(1);
  const promise2 = new Promise(resolve => setTimeout(() => resolve(2), 1000));
  const promise3 = Promise.resolve(3);
  
  const promisesArray = [promise1, promise2, promise3];
  
  resolvePromises(promisesArray)
    .then(results => {
      console.log(results); // Output: [1, 2, 3]
    })
    .catch(error => {
      console.error(error);
    });

    

    function sumOfResolvedPromises(promise1, promise2) {
      return Promise.all([promise1, promise2])
        .then(([value1, value2]) => value1 + value2);
    }
    
    const promiseA = Promise.resolve(5);
    const promiseB = new Promise(resolve => setTimeout(() => resolve(10), 1000));
    
    sumOfResolvedPromises(promiseA, promiseB)
      .then(result => {
        console.log(result); // Output: 15 (5 + 10)
      })
      .catch(error => {
        console.error(error);
      });

      

      const mapNamesToAges = people => new Map(people.map(person => [person.name, person.age]));

const peopleArray = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Carol", age: 22 }
];

const ageMap = mapNamesToAges(peopleArray);

for (const [name, age] of ageMap) {
  console.log(`${name}'s age is ${age}`);
}



const mapContainsKey = (map, key) => map.has(key);

const myMap = new Map([
  ['name', 'Alice'],
  ['age', 25],
  ['occupation', 'Engineer']
]);

const keyToCheck = 'age';
const containsKey = mapContainsKey(myMap, keyToCheck);

console.log(`Map contains key "${keyToCheck}": ${containsKey}`);


const filterMapByKeyValue = (map, callback) => {
  const filteredMap = new Map();
  
  for (const [key, value] of map) {
    if (callback(key, value)) {
      filteredMap.set(key, value);
    }
  }
  
  return filteredMap;
};

const originalMap = new Map([
  ['name', 'Alice'],
  ['age', 25],
  ['occupation', 'Engineer']
]);

const filteredMap = filterMapByKeyValue(originalMap, (key, value) => key === 'age' || value === 'Engineer');

for (const [key, value] of filteredMap) {
  console.log(`${key}: ${value}`);
}




const mergeMaps = (map1, map2) => {
  const mergedMap = new Map(map1);
  
  for (const [key, value] of map2) {
    mergedMap.set(key, value);
  }
  
  return mergedMap;
};

const map1 = new Map([
  ['name', 'Alice'],
  ['age', 25]
]);

const map2 = new Map([
  ['age', 30],
  ['occupation', 'Engineer']
]);

const merged = mergeMaps(map1, map2);

for (const [key, value] of merged) {
  console.log(`${key}: ${value}`);
}




class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

console.log(person1.introduce()); // Output: "Hi, my name is Alice and I am 30 years old."
console.log(person2.introduce()); // Output: "Hi, my name is Bob and I am 25 years old."



class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }

  calculatePerimeter() {
    return 2 * (this.width + this.height);
  }
}

const rectangle1 = new Rectangle(5, 10);
const rectangle2 = new Rectangle(7, 12);

console.log(`Rectangle 1 Area: ${rectangle1.calculateArea()}`); // Output: "Rectangle 1 Area: 50"
console.log(`Rectangle 1 Perimeter: ${rectangle1.calculatePerimeter()}`); // Output: "Rectangle 1 Perimeter: 30"
console.log(`Rectangle 2 Area: ${rectangle2.calculateArea()}`); // Output: "Rectangle 2 Area: 84"
console.log(`Rectangle 2 Perimeter: ${rectangle2.calculatePerimeter()}`); // Output: "Rectangle 2 Perimeter: 38"



class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  calculateDiameter() {
    return 2 * this.radius;
  }

  calculateCircumference() {
    return 2 * Math.PI * this.radius;
  }

  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}

const circle1 = new Circle(5);
const circle2 = new Circle(7);

console.log(`Circle 1 Diameter: ${circle1.calculateDiameter()}`); // Output: "Circle 1 Diameter: 10"
console.log(`Circle 1 Circumference: ${circle1.calculateCircumference()}`); // Output: "Circle 1 Circumference: 31.41592653589793"
console.log(`Circle 1 Area: ${circle1.calculateArea()}`); // Output: "Circle 1 Area: 78.53981633974483"
console.log(`Circle 2 Diameter: ${circle2.calculateDiameter()}`); // Output: "Circle 2 Diameter: 14"
console.log(`Circle 2 Circumference: ${circle2.calculateCircumference()}`); // Output: "Circle 2 Circumference: 43.982297150257104"
console.log(`Circle 2 Area: ${circle2.calculateArea()}`); // Output: "Circle 2 Area: 153.93804002589985"









//function printVariable() {
  //var myVar = "Hello from inside the function!";
  //console.log(myVar);
//}

//printVariable();

//console.log(myVar); // This will result in an error

//{
//function printVariable() {
  //let myVar = "Hello from inside the function!";
  //console.log(myVar);
//}

//printVariable();

//console.log(myVar); // This will result in an error


callAnotherFunction();

function callAnotherFunction() {
  console.log("Hello from callAnotherFunction!");
}


const person = {
  name: "John",
  greet: function() {
    console.log(`Hello, my name is ${this.name}.`);
  }
};

person.greet(); // This will log: "Hello, my name is John."



function Car(brand) {
  this.brand = brand;
  this.speed = 0;

  this.accelerate = function(value) {
    this.speed += value;
  };

  this.printSpeed = function() {
    console.log(`Current speed of ${this.brand} car: ${this.speed} mph`);
  };
}

// Usage
const myCar = new Car("Toyota");
myCar.accelerate(50);
myCar.printSpeed(); // Output: Current speed of Toyota car: 50 mph



const calculator = {
  value: 0,

  add: function(number) {
    this.value += number;
  },

  subtract: function(number) {
    this.value -= number;
  },

  multiply: function(number) {
    this.value *= number;
  },

  printValue: function() {
    console.log(`Current value: ${this.value}`);
  }
};

// Usage
calculator.add(10);
calculator.subtract(5);
calculator.multiply(2);
calculator.printValue(); // Output: Current value: 10



const book = {
  title: "Sample Book",
  author: "John Doe",
  pages: 200,

  printInfo: function() {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author}`);
    console.log(`Pages: ${this.pages}`);
  }
};

// Usage
book.printInfo();




const counter = {
  count: 0,

  increment: function() {
    this.count += 1;
  },

  reset: function() {
    this.count = 0;
  }
};

// Usage
console.log(counter.count); // Output: 0
counter.increment();
console.log(counter.count); // Output: 1
counter.increment();
console.log(counter.count); // Output: 2
counter.reset();
console.log(counter.count); // Output: 0



const game = {
  play: function() {
    console.log("Playing the game...");
  }
};

// Calling the play function using this keyword
game.play(); // Output: Playing the game...


const fruits = ["Apple", "Banana", "Orange", "Mango", "Strawberry"];

for (const fruit of fruits) {
  console.log(fruit);
}


const colors = new Set(["Red", "Green", "Blue", "Yellow"]);

for (const color of colors) {
  console.log(color);
}


// a. Create an empty array
const myArray = [];

// b. Run a loop 10 times, adding a new incrementing value to the array
for (let i = 0; i < 10; i++) {
  myArray.push(i);
}

// c. Log the array into the console
console.log("Array contents:", myArray);

// d. Use the for loop to iterate through the array and output into the console
console.log("Using for loop:");
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

// e. Use the for of loop to output the value into the console from the array
console.log("Using for...of loop:");
for (const value of myArray) {
  console.log(value);
}




const scores = new Map([
  ["Alice", 95],
  ["Bob", 82],
  ["Eve", 75]
]);

for (const [name, score] of scores) {
  console.log(`${name}: ${score}`);
}



const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2022
};

for (const key in car) {
  const value = car[key];
  console.log(value);
}


async function delayedGreeting(name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Hello, ${name}!`);
      resolve();
    }, 2000);
  });
}

// Usage
async function greet() {
  await delayedGreeting("Alice");
  console.log("Greeting finished.");
}

greet();




async function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => {
      const data = { message: "Data fetched successfully!" };
      resolve(data);
    }, 3000);
  });
}

// Usage
async function getData() {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.error("Error:", error);
  }
}

getData();



async function fetchUsers() {
  return new Promise(resolve => {
    setTimeout(() => {
      const users = [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
        { id: 3, name: "Eve" }
      ];
      resolve(users);
    }, 4000);
  });
}

// Usage
async function getUsers() {
  try {
    const userList = await fetchUsers();
    console.log(userList);
  } catch (error) {
    console.error("Error:", error);
  }
}

getUsers();


let globalCounter = 0;

function timeoutWithCounter(argValue) {
  return new Promise(resolve => {
    setTimeout(() => {
      globalCounter++;
      resolve({ counter: globalCounter, argValue });
    }, 1000); // 1 second delay
  });
}

async function asyncFunction(argValue) {
  const result = await timeoutWithCounter(argValue);
  console.log(`Global counter: ${result.counter}, Argument value: ${result.argValue}`);
  return result;
}

async function runAsyncLoop() {
  for (let i = 0; i < 10; i++) {
    const result = await asyncFunction(i);
    console.log("Returned result:", result);
  }
}

// Usage
runAsyncLoop();


function createMultiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

// Usage
const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // Output: 10 (2 * 5)
console.log(triple(5)); // Output: 15 (3 * 5)


function secretMessage(secret) {
  return function(message) {
    console.log(`Secret: ${secret}, Message: ${message}`);
  };
}

// Usage
const reveal = secretMessage("The secret is out!");

reveal("Hello!"); // Output: Secret: The secret is out!, Message: Hello!
reveal("How are you?"); // Output: Secret: The secret is out!, Message: How are you?


