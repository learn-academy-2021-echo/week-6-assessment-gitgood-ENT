// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

const { strict } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// describe("functionName", () => {
//   it("functionFunction", () => {
//     expect(functionName(input)).toEqual(expectedOutput)
//   })
// })

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.


// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// Describe a function called "descriptor" that takes in an array of objects and returns an array with a sentence about each person with their name capitalized
describe("descriptor", () => {
  let people = [
    { name: "ford prefect", occupation: "a hitchhiker" },
    { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
    { name: "arthur dent", occupation: "a radio employee" }
  ]
  let expectedOutput = ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () => {
    expect(descriptor(people)).toEqual(expectedOutput)
  })
})
// RED

// b) Create the function that makes the test pass.

// Create a function that takes in an array, uses split, charAt, toUpperCase, and slice to capitalize the name, then join them together and then concat it with the occupation.
const descriptor = (array) => {
  return array.map(
    (person) => `${person.name.split(" ").map((naame) => naame.charAt(0).toUpperCase() + naame.slice(1)).join(" ")} is ${person.occupation}.`
  )
}

// Green


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.



// Describe a function called remainders that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.
describe("remainders", () => {
  let hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
  let expectedOutput1 = [ 2, 0, -1, 0 ]
  let hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
  let expectedOutput2 = [ 2, 1, -1 ]
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
    expect(remainders(hodgepodge1)).toEqual(expectedOutput1)
    expect(remainders(hodgepodge2)).toEqual(expectedOutput2)
  })
})

// RED

// b) Create the function that makes the test pass.

// Create a function that takes in an array and filters out the non-numbers and then uses map to return the remainder of the numbers
const remainders = (arr) => {
  return arr.filter(value => typeof value === 'number').map(value => value % 3)
}

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.


// Describe a function called cubeAndSum that takes in an array of numbers and returns the sum of all the numbers cubed.
describe("cubeAndSum", () => {
  let cubeAndSum1 = [2, 3, 4]
  let expectedOutput1 = 99
  let cubeAndSum2 = [0, 5, 10]
  let expectedOutput2 = 1125
  it("takes in an array of numbers and returns the sum of all the numbers cubed.", () => {
    expect(cubeAndSum(cubeAndSum1)).toEqual(expectedOutput1)
    expect(cubeAndSum(cubeAndSum2)).toEqual(expectedOutput2)
  })
})
// RED

// b) Create the function that makes the test pass.

// Create a function that takes in an array, cubes each of the numbers using map, and then adds them
const cubeAndSum = (arr) => {
  return arr.map(value => value ** 3).reduce((a, b) => (a + b))
}

// Green