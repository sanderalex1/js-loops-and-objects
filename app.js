/******************************************************************************
------------------------------------
!READ THE ASSIGNMENT TEXT CAREFULLY!
------------------------------------

1.

Use a regular ‘for loop’ to iterate through the `people` array and perform the following:

- If the object's `name` value is “Otto”, none of the changes below should be made 
  to that object (hint: use the `continue` keyword).

- Create a new key on each person object in the array called “city” and set its value
  to a random city from the `cities` array.

- Create a new key on each person object called “title” and set it to “Mr.” for
  men and “Ms.” for women.
    
- Increase the age by 2.

- Add “coding” to the beginning of the hobby array in each object.

**PS**: Use only one loop to do all of the above steps.

Use `console.log(people)` after the loop to check that the changes are correct.

Use your loop to calculate the combined age of all person objects 
and store it in the variable `combinedAge`.

Then, after the loop, use the combined age to calculate the average age
of everyone and store it in the variable `averageAge`.

Do the calculations AFTER adding two years to the age, and remember, skip Otto!

******************************************************************************/

const cities = ["New York", "London", "Paris", "Berlin", "Copenhagen", "Rome"];

function randomCity() {
  const randomIndex = Math.floor(Math.random() * cities.length);
  const randomCity = cities[randomIndex];
  return randomCity;
} // returns a random city of the cities array

const people = [
  {
    name: "Thomas",
    male: true,
    age: 23,
    hobbies: ["cycling", "football", "pool"],
  },
  {
    name: "Susan",
    male: false,
    age: 26,
    hobbies: ["jogging", "travelling", "dancing"],
  },
  {
    name: "Monica",
    male: false,
    age: 21,
    hobbies: ["skateboarding", "guitar", "concerts"],
  },
  {
    name: "Avery",
    male: true,
    age: 28,
    hobbies: ["writing", "games", "memes"],
  },
  {
    name: "Phillip",
    male: true,
    age: 24,
    hobbies: ["boxing", "wrestling", "mma"],
  },
  {
    name: "Otto",
    male: true,
    age: 36,
    hobbies: ["movies", "cinema", "music"],
  },
  {
    name: "Annabelle",
    male: false,
    age: 30,
    hobbies: ["makeup", "fashion", "shopping"],
  },
  {
    name: "Cathy",
    male: false,
    age: 18,
    hobbies: ["design", "drawing", "css"],
  },
];
let combinedAge = 0;
let averageAge = 0;
for (const person of people) {
  if (person.name === "Otto") continue;

  person.city = randomCity();

  person.title = "Mrs.";
  if (person.male) {
    person.title = "Mr.";
  }

  person.age = person.age + 2;

  person.hobbies.unshift("programming"); // adding a str in the begginning of the hobby array in each object

  combinedAge += person.age;
  averageAge = combinedAge / people.length;
}
console.log(people);
console.log(combinedAge);
console.log(averageAge);

/******************************************************************************
2.

Create the following function:

The function should take one number as a parameter.

The function should return an array of random numbers between 1 and 6.
The length of the array is determined by the number that the function receives as a parameter
(think of it as the number of dice we roll).

Examples: 
diceRoller(4) should return something like: [4, 1, 2, 6]
diceRoller(6) should return something like: [5, 5, 6, 2, 3, 4]

Add a second parameter to the function that determines how many sides the dice should have.
diceRoller(5, 20) should return an array with 5 random numbers from 1-20.

******************************************************************************/

function diceRoller(num, sides = 6) {
  const arr = [];
  const min = 1;
  while (num-- > 0 && sides) {
    arr.push(Math.floor(Math.random() * sides) + min);
  }

  return arr;
}
console.log(diceRoller(5, 15));
/******************************************************************************
3.

Create the following function:

The function should take an array of strings as a parameter.

Inside the function, do the following:

Write a loop that iterates through the strings in the array and does the following:
- Remove spaces from the beginning and end of each word.
- Convert all words to lowercase.

Use a “for...of” loop.

After the loop, use a method to concatenate the array into a single string 
with a single space between words (“ ”), and return the resulting string.

Example:
[“ thIS”, “teXt  ”, “ nEeds ”, “to”, ‘BE’, “cleANED   ”, “ Up”]
should return:
“this text needs to be cleaned up”

******************************************************************************/

function strCleaner(strArr) {
  arr = [];
  for (str of strArr) {
    arr.push(str.trim().toLowerCase());
  }
  return arr.join(" ");
}

console.log(
  strCleaner(["thIS", "teXt  ", " nEeds ", "to", "BE", "cleANED   ", " Up"])
);

/******************************************************************************
4.

Complete the function below to achieve the following:

Return the string received in the first parameter with the following changes:

Each letter in the string that matches `charA` (second parameter) should be replaced with `charB` (third parameter), and VICE VERSA - that is, letters that 
match `charA` should be swapped with `charB`, and letters that match `charB` should be swapped with `charA`.

Examples:

doubleSwap(“this is a string”, ‘i’, “s”)
should return “thsi si a itrsng”

doubleSwap(“m#ybe #nother #ppro#ch is necess#ry”, “#”, “a”)
should return “maybe another approach is necessary”

doubleSwap(“what is the point of this?”, ‘o’, “t”)
should return “whao is ohe ptino tf ohis?”

******************************************************************************/

function doubleSwap(str, charA, charB) {
  const splitString = str.split("");
  for (let i = 0; i < str.length; i++) {
    if (splitString[i] === charA) {
      console.log(splitString[i], charA);
      splitString[i] = charB;
    } else if (splitString[i] === charB) {
      splitString[i] = charA;
    }
  }
  return splitString.join("");
}

console.log(doubleSwap("this is a string", "i", "s"));

/******************************************************************************
5.

EXTRA CHALLENGE:

(Completing this task is not mandatory, only for those who want an extra challenge)

Create a function called `helloChecker` that takes a string as a parameter.

Write code that checks all the words in the string to find out if any of them
match the word for “hello” in any of these languages:

- hello (English)
- ciao (Italian)
- salut (French)
- hallo (German)
- hola (Spanish)
- czesc (Polish)

If any of the words in the string match one of these, the function should return:
“HELLO detected in (name of language).”

If none of the words in the string match, the function should return:
“No HELLO detected.”

PS: Make sure the function is case-insensitive; both “Hello” and “hello” should be detected.

I have added some test variables to check your function.

******************************************************************************/

const greetings = [
  "Hello, how are you today?",
  "Diciamo ciao prima di andare!",
  "Salut, ça va bien?",
  "Kannst du mich hören? Hallo!",
  "Hva er regex?",
  "Nos saludamos con un alegre hola.",
  "Ona pomachała i powiedziała cześć z uśmiechem.",
  "Good afternoon gentlemen!",
];

const helloList = {
  English: "hello",
  Italia: "ciao",
  French: "salut",
  German: "hallo",
  Spanish: "hola",
  Polish: "czesc",
};
function helloChecker(str) {
  str = str.toLowerCase();

  for (value in helloList) {
    if (str.includes(helloList[value])) {
      return `HELLO detected in ${value}.`;
    }
  }

  return "No HELLO detected.";
}

console.log(helloChecker("Hello, how are you today?"));

/*
    GENERAL RESTRICTIONS:
     - Do not modify anything that is not explicitly marked as modifyable
     - You're not allowed to declare any values that aren't already declared
     - You're not allowed to use string literals or -templates (i.e. "string", 'string' or `string`)
*/

const functionName = "Hello World!"; // <--- You're allowed to modify this string!

({
  [functionName]() {
    document.body.firstElementChild.textContent = functionName;
  },
})[functionName]();
