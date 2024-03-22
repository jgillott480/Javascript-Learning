// Question 1. Array called ages.
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

// 1A. Programmatically subtract the first element from the last element of the array.
let lastIndex = ages.length - 1;
let subtractionResult = ages[lastIndex] - ages[0];
console.log("Subtraction result:", subtractionResult);

// 1B. Add a new age to the array and repeat the subtraction
ages.push(42);
let newLastIndex = ages.length - 1;
let newSubtractionResult = ages[newLastIndex] - ages[0];
console.log("New subtraction result:", newSubtractionResult);

// 1C. Calculate the average age using a loop
let sum = 0;
for (let i = 0; i < ages.length; i++) {
    sum += ages[i];
}
let averageAge = sum / ages.length;
console.log("Average age:", averageAge);



    // Question 2. Create an array called names
    let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
 names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

    // 2A. Calculate the average number of letters per name
    let totalLetters = 0;
    for (let i = 0; i < names.length; i++) {
    totalLetters += names[i].length;
}
let averageLettersPerName = totalLetters / names.length;
    console.log("Average letters per name:", averageLettersPerName);

    // 2B. Concatenate all the names together separated by spaces
    let concatenatedNames = names.join(' ');
    console.log("Concatenated names:", concatenatedNames);

// Question 3. Example to access the last element of an array.
let lastElement = ages[ages.length - 1];
console.log("Last element of ages array:", lastElement);

    // Question 4. Example to access the first element of an array
    let firstElement = ages[0];
    console.log("First element of ages array:", firstElement);

// Question 5. Create a new array called nameLengths and calculate the lengths of each name
let nameLengths = [];
for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
}
console.log("Name lengths:", nameLengths);

// Question 6. Calculate the sum of all elements in the nameLengths array
let sumOfNameLengths = 0;
for (let i = 0; i < nameLengths.length; i++) {
    sumOfNameLengths += nameLengths[i];
}
console.log("Sum of name lengths:", sumOfNameLengths);

// Question 7. Function to concatenate a word to itself n times
function concatenateWord(word, n) {
    return word.repeat(n);
}

console.log("Concatenated word:", concatenateWord("Hello", 3));

// Question 8. Function to return a full name
function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

console.log("Full name:", fullName("John", "Doe"));

// Question 9. Function to check if the sum of numbers in an array is greater than 100
function isSumGreaterThan100(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum > 100;
}

console.log("Is sum greater than 100?", isSumGreaterThan100([50, 30, 25]));

// Question 10. Function to calculate the average of numbers in an array
function calculateAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}

console.log("Average:", calculateAverage([5, 10, 15]));

// Question 11. Function to compare averages of two arrays
function compareAverages(array1, array2) {
    return calculateAverage(array1) > calculateAverage(array2);
}

console.log("Is average of array1 greater than average of array2?", compareAverages([10, 20, 30], [5, 15, 25]));

// Question 12. Function to check if it's hot outside and if there's enough money to buy a drink
function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket > 10.50;
}

console.log("Will buy drink?", willBuyDrink(true, 12.00));

// Question 13. Create a function that solves a problem.
// I created it because sometimes picking a spot when you have so many to choose from can be 
// a challenge. So I'll let this function decide and solve my problem of where to go.
function pickSpotForCamping() {
    const spots = [
        "Kalaloch",
        "Falls Creek",
        "Mount Skokomish",
        "Glen Ayr Resort",
        "Gilgal Oasis",
        "Point Hudson",
        "Crescent Beach",
        "Hoh Rainforest",
        "Sol Duc Hot Springs",
        "Fairholme"
    ];

    // randomize index to pick a camp spot.
    const randomIndex = Math.floor(Math.random() * spots.length);

    return spots[randomIndex];
}

const selectedSpot = pickSpotForCamping();
console.log("You should camp at:", selectedSpot);

console.log("Area of rectangle:", calculateRectangleArea(5, 10));


