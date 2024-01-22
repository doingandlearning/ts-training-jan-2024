// es6 -> es2015

// 1. Default parameters

const SCREEN_BASE = 10;

function areaOfRect(length = SCREEN_BASE, width = length) {
  if (!length) {
  }
  return length * width;
}

const rect1 = areaOfRect(10, 5);
const rect2 = areaOfRect(); // 100
const square = areaOfRect(5); // 25

// 2. Template Literals

const greeting =
  "Hello, rect1 you have an area of " + rect1 + " units squared.";

const greetingLiteral = `Hello, rect1 you have an area ${rect1} units squared.





This is still part of greeting literal!`;

function generatePage(body) {
  return `
	<html>
		<body>
		  ${body}
		</body>
	</html>`;
}

generatePage("<p>I am on the page</p>");

// 3. Object literals

function getLaptop(make, model, year) {
  return {
    make: make,
    model: model,
    year: year,
  };
}
function getLaptop1(make, model, year) {
  return {
    make,
    model,
    year,
  };
}

// 4. Arrow functions

// lambda

console.log(add(1, 2));

function add(a: number, b: number) {
  return a + b;
}

const anonAdd = function (a, b) {
  return a + b;
};

const addArrow = (a: number, b: number) => a + b; // implicit return
console.log(addArrow(1, 2));

const addArrowAndLog = (a: number, b: number) => {
  console.log("I am going to add two numbers");
  // anything i'd normally do!
  return a + b;
}; // explicit return

console.log(addArrowAndLog(1, 2));

const person = {
  name: "Alex",
  sayMyName: function () {
    console.log(`My name is ${JSON.stringify(this)}`);
  },
};

person.sayMyName();

// 5. let/const/var

var company = "BBC";

let team = "BBC Sounds";
const office = "Glasgow";

// Depends!!

// block scope

function simulateDom() {
  const pseudoDom = {
    button1: {},
    button2: {},
    button3: {},
  };
  for (let i = 1; i <= 3; i++) {
    // 1
    const element = pseudoDom["button" + i];
    element.click = function () {
      return "Item " + i + " is clicked."; // 2
    };
  }
  console.log(pseudoDom.button1.click());
  console.log(pseudoDom.button2.click());
  console.log(pseudoDom.button3.click()); // 3
  return pseudoDom;
}

simulateDom();

// "click" undefined
// Item 1 is clicked, Item 2 is clicked, Item 3 is clicked
