"use strict";
//q1
console.log("hello world!");
//q2
let temp = 18;
if (temp < 20) {
    console.log("it's cold");
}
//q3
// Start with 10 apples
const totalApples = 10;
// Give away 3 apples
const applesGiven = 3;
// Calculate how many apples are left
const applesLeft = totalApples - applesGiven;
// Display the result
console.log(`After giving away ${applesGiven} apples, you have ${applesLeft} left.`);
//q4
let firstname = "ali";
let lastname = "ahmad";
let fullname = `${firstname} ${lastname}`;
console.log(fullname);
//q5
//Write a TypeScript code that uses a comparison operator to check if the number 5 is greater than 3. Log "Yes" if true, otherwise log "No".
let num = 5;
if (num > 3) {
    console.log("yes");
}
else {
    console.log("no");
}
//q6
function calculateArea(radius) {
    const pi = 3.14159;
    const area = pi * radius * radius;
    return area;
}
//q7
//Write a loop that logs numbers from 1 to 50. For multiples of 3, log "Fizz" instead of the number, and for multiples of 5, log "Buzz".
for (let i = 1; i <= 50; i++) {
    let output = "";
    if (i % 3 === 0)
        output += "Fizz";
    if (i % 5 === 0)
        output += "Buzz";
    console.log(output || i);
}
//q8
//Define an array temperatures with at least five different temperatures (numbers). Write a script to find and log the highest temperature.
const temperature = [18, 25, 40, 45, 60];
// Define an array of temperatures
let highest = temperature[0];
for (let i = 1; i < temperature.length; i++) {
    // If the current temperature is higher than the current highest, update highest
    if (temperature[i] > highest) {
        highest = temperature[i];
    }
}
console.log("Highest temperature:", highest);
//q9
//10
function countPositiveNumbers(numbers) {
    let count = 0;
    for (const num of numbers) {
        if (num > 0) {
            count++;
        }
    }
    return count;
}
const numbersArray = [-1, 2, 0, 5, -6, 10];
const positiveCount = countPositiveNumbers(numbersArray);
console.log("Count of positive numbers:", positiveCount);
//Q11: Write a function that takes an array of words and returns a new array containing only the words that start with the letter 'a'.
function filterWordsA(words) {
    const result = [];
    // Iterate over each word in the array
    words.forEach(word => {
        // Check if the word starts with 'a' (case-insensitive)
        if (word.toLowerCase().startsWith('a')) {
            // If it does, add it to the result array
            result.push(word);
        }
    });
    return result;
}
//let's explore an exapmle for better understanding 
const wordArray = ["apple", "banana", "orange", "apricot", "kiwi"];
const wordsWithA = filterWordsA(wordArray);
console.log(wordsWithA); // Output: ["apple", "apricot"]
//Q12.Create a script that logs the second to last element of an array named fruits.
const fruits = ["apple", "banana", "orange", "grape", "kiwi"];
if (fruits.length >= 2) {
    const SecondToLastElement = fruits[fruits.length - 2];
    console.log("Second to last element", SecondToLastElement);
}
else {
    console.log("The array has less than two elements.");
}
//Q13Develop a function that takes an array of numbers and returns a new array with each number squared
function squareNumbers(nums) {
    // Initialize an empty array to store the squared numbers
    const squaredNumbers = [];
    // Loop through the array of numbers
    for (let i = 0; i < nums.length; i++) {
        // Square each number and push it to the squaredNumbers array
        squaredNumbers.push(nums[i] * nums[i]);
    }
    // Return the array of squared numbers
    return squaredNumbers;
}
//Q14.
function reverseArray(arr) {
    // Initialize an empty array to store the reversed elements
    const reversedArray = [];
    // Loop through the input array in reverse order
    for (let i = arr.length - 1; i >= 0; i--) {
        // Push each element to the reversedArray
        reversedArray.push(arr[i]);
    }
    return reversedArray;
}
//Q15
//Given an array scores [10, 5, 20, 20, 4, 5, 2, 25, 1], write a function that logs the number of times the score exceeded the maximum score and the number of times it fell below the minimum score.
function countExceedsAndFalls(scores) {
    if (scores.length === 0) {
        console.log("The array is empty.");
        return;
    }
    let maxScore = scores[0];
    let minScore = scores[0];
    let exceedsCount = 0;
    let fallsCount = 0;
    for (let score of scores) {
        if (score > maxScore) {
            exceedsCount++;
            maxScore = score; // Update maxScore if current score exceeds it
        }
        if (score < minScore) {
            fallsCount++;
            minScore = score; // Update minScore if current score falls below it
        }
    }
    console.log("Number of times the score exceeded the maximum score:", exceedsCount);
    console.log("Number of times the score fell below the minimum score:", fallsCount);
}
//Q16Create a function that removes all falsey values from an array. Falsey values include false, null, 0, "", undefined, and NaN
function removeFalsey(arr) {
    return arr.filter(item => !!item);
}
const mixedArray = [0, false, "", null, undefined, NaN, 42, "hello"];
const filteredArray = removeFalsey(mixedArray);
console.log(filteredArray); // Output: [42, "hello"]
//Q17Write a script that concatenates two arrays [1, 2, 3] and [4, 5, 6] into a single array.
// Define the arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
// Concatenate the arrays
const concatenatedArray = arr1.concat(arr2);
// Log the concatenated array
console.log(concatenatedArray); // Output: [1, 2, 3, 4, 5, 6]
//Q18
//Develop a function called sumOfElements that calculates the sum of all elements in an array that are either even or odd, based on a parameter.
function sumOfElements(arr, isEven) {
    let sum = 0;
    for (let num of arr) {
        // Check if the number should be included based on the isEven parameter
        if ((isEven && num % 2 === 0) || (!isEven && num % 2 !== 0)) {
            sum += num;
        }
    }
    return sum;
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Sum of even elements:", sumOfElements(numbers, true)); // Output: 20 (2 + 4 + 6 + 8)
console.log("Sum of odd elements:", sumOfElements(numbers, false)); // Output: 25 (1 + 3 + 5 + 7 + 9)
//Q19Create a function that checks whether an element exists in an array. If it exists, return the index, otherwise return -1.
function findIndexInArray(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return i; // Return the index if the element is found
        }
    }
    return -1; // Return -1 if the element is not found
}
const number = [1, 2, 3, 4, 5];
const index1 = findIndexInArray(number, 3); // Element 3 exists at index 2
const index2 = findIndexInArray(number, 6); // Element 6 does not exist
console.log("Index of element 3:", index1); // Output: 2
console.log("Index of element 6:", index2); // Output: -1
//Q20
function findSmallestNumber(arr) {
    if (arr.length === 0) {
        throw new Error("Array is empty.");
    }
    let smallest = arr[0];
    for (let num of arr) {
        if (num < smallest) {
            smallest = num;
        }
    }
    return smallest;
}
const my_array = [3, 1, 5, 2, 4];
const smallestNumber = findSmallestNumber(my_array);
console.log("The smallest number is:", smallestNumber); // Output: 1
/*...................Functions....................*/
//Q21Write a function calculateProduct that takes an array of numbers and returns the product of all elements.
function calculateProduct(numbers) {
    if (numbers.length === 0) {
        throw new Error("Array is empty.");
    }
    let product = 1;
    for (let num of numbers) {
        product *= num;
    }
    return product;
}
const myNumbers = [1, 2, 3, 4, 5];
const product = calculateProduct(myNumbers);
console.log("The product of all elements is:", product);
//Q22
//Develop a function filterByLength that takes an array of strings and a number n. The function should return an array containing only the strings that are longer than n characters.
function filterByLength(strings, n) {
    return strings.filter(str => str.length > n);
}
const words = ["apple", "banana", "orange", "kiwi", "grape"];
const filteredWords = filterByLength(words, 5);
console.log("Filtered words:", filteredWords); // Output: ["banana", "orange"]
//Q23
//Create a function findDuplicates that finds and logs all duplicates in an array.
function findDuplicates(arr) {
    const seen = {};
    const duplicates = [];
    for (let item of arr) {
        // If the item is already in seen, it's a duplicate
        if (seen[item]) {
            duplicates.push(item);
        }
        else {
            // Otherwise, mark it as seen
            seen[item] = true;
        }
    }
    // Log the duplicates
    console.log("Duplicates:", duplicates);
}
const MyArray = [1, 2, 3, 4, 2, 5, 6, 3];
findDuplicates(MyArray);
//Q24Write a function incrementAll that takes an array of integers and increments each element by one.
function incrementAll(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] += 1;
    }
}
const numb = [1, 2, 3, 4, 5];
incrementAll(numbers);
console.log("Incremented array:", numb); // Output: [2, 3, 4, 5, 6]
//Q25 Develop a function countOccurrences that counts how many times a specific element appears in an array.
function countOccurrences(arr, element) {
    let count = 0;
    for (let item of arr) {
        if (item === element) {
            count++;
        }
    }
    return count;
}
const my_Array = [1, 2, 3, 4, 2, 5, 6, 3, 2];
const elementToCount = 2;
const occurrences = countOccurrences(my_Array, elementToCount);
console.log(`The element ${elementToCount} appears ${occurrences} times.`);
//Q26Create a function isSorted that checks if an array is sorted in ascending order.
function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            return false;
        }
    }
    return true;
}
const sortedArray = [1, 2, 3, 4, 5];
const unsortedArray = [3, 1, 5, 2, 4];
console.log("Is sorted:", isSorted(sortedArray)); // Output: true
console.log("Is sorted:", isSorted(unsortedArray)); // Output: false
//Q27
//Write a function that receives an array of names and formats them into a string separated by commas, except for the last two names, which should be separated by "and".
function formatNames(names) {
    if (names.length === 0) {
        return "";
    }
    else if (names.length === 1) {
        return names[0];
    }
    else if (names.length === 2) {
        return `${names[0]} and ${names[1]}`;
    }
    else {
        const formattedNames = names.slice(0, -2).join(", ") + ", " + names.slice(-2).join(" and ");
        return formattedNames;
    }
    const names1 = ["Alice", "Bob", "Charlie", "David"];
    console.log(formatNames(names1)); // Output: "Alice, Bob, Charlie and David"
    const names2 = ["Alice", "Bob"];
    console.log(formatNames(names2)); // Output: "Alice and Bob"
    const names3 = ["Alice"];
    console.log(formatNames(names3)); // Output: "Alice"
    const names4 = [];
    console.log(formatNames(names4)); // Output: ""
    //Q28
    //Develop a function that converts an array of Fahrenheit temperatures to Celsius and logs the new temperatures.
    function convertFahrenheitToCelsius(temperaturesF) {
        const temperaturesC = temperaturesF.map(temp => (temp - 32) * 5 / 9);
        console.log("Fahrenheit Temperatures:", temperaturesF);
        console.log("Celsius Temperatures:", temperaturesC);
    }
    const fahrenheitTemperatures = [32, 68, 86, 104];
    convertFahrenheitToCelsius(fahrenheitTemperatures);
    //Q29
    //Write a function minMaxAverage that takes an array of numbers and returns an object with properties for the minimum, maximum, and average of those numbers.
    function minMaxAverage(numbers) {
        if (numbers.length === 0) {
            throw new Error("Array is empty.");
        }
        let min = numbers[0];
        let max = numbers[0];
        let sum = numbers[0];
        for (let i = 1; i < numbers.length; i++) {
            const num = numbers[i];
            if (num < min) {
                min = num;
            }
            if (num > max) {
                max = num;
            }
            sum += num;
        }
        const average = sum / numbers.length;
        return { min, max, average };
    }
    const myNum = [3, 1, 5, 2, 4];
    const result = minMaxAverage(myNum);
    console.log("Minimum:", result.min); // Output: 1
    console.log("Maximum:", result.max); // Output: 5
    console.log("Average:", result.average); // Output: 3
    //Q30
    //Create a function swapElements that swaps two specified indices in an array.
    function swapElements(arr, index1, index2) {
        // Check if indices are within the bounds of the array
        if (index1 < 0 || index1 >= arr.length || index2 < 0 || index2 >= arr.length) {
            throw new Error("Indices are out of bounds.");
        }
        // Swap elements at the specified indices
        const temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }
    const array = ["a", "b", "c", "d", "e"];
    swapElements(array, 1, 3);
    console.log("Swapped array:", array); // Output: ["a", "d", "c", "b", "e"]
    /*.....................HARD............................*/
    //Q31
    //Develop a function that takes two inputs, a string and a character, and returns the number of times the character appears in the string.
    function countOccurrence(str, char) {
        let count = 0;
        for (let i = 0; i < str.length; i++) {
            if (str[i] === char) {
                count++;
            }
        }
        return count;
    }
    const myString = "hello world";
    const myCharacter = "l";
    const occurrence = countOccurrence(myString, myCharacter);
    console.log(`The character "${myCharacter}" appears ${occurrence} times in "${myString}".`);
    const todoList = [
        { task: "Finish homework", completed: false },
        { task: "Go grocery shopping", completed: true },
        { task: "Exercise", completed: false },
        { task: "Read a book", completed: true }
    ];
    function logIncompleteTasks(todoList) {
        console.log("Incomplete Tasks:");
        for (let todo of todoList) {
            if (!todo.completed) {
                console.log(todo.task);
            }
        }
    }
    logIncompleteTasks(todoList);
    //Q33
    //Write a function that takes an array of integers and sorts them from smallest to largest.
    function sortArray(arr) {
        // Use the sort() method to sort the array in ascending order
        return arr.sort((a, b) => a - b);
    }
    const n = [3, 1, 5, 2, 4];
    const sortedNumbers = sortArray(n);
    console.log("Sorted array:", sortedNumbers); // Output: [1, 2, 3, 4, 5]
    //Q34
    //Develop a TypeScript program that logs every element of an array in reverse order without using the .reverse() method.
    function logArrayReversed(arr) {
        for (let i = arr.length - 1; i >= 0; i--) {
            console.log(arr[i]);
        }
    }
    const myArray = [1, 2, 3, 4, 5];
    logArrayReversed(myArray);
    //Q35
    //Write a script that simulates a basic calculator. It should take two operands and an operator ('+', '-', '*', '/') from the user, perform the operation, and log the result.
    function calculate(operator, operand1, operand2) {
        let result;
        switch (operator) {
            case '+':
                result = operand1 + operand2;
                break;
            case '-':
                result = operand1 - operand2;
                break;
            case '*':
                result = operand1 * operand2;
                break;
            case '/':
                if (operand2 !== 0) {
                    result = operand1 / operand2;
                }
                else {
                    throw new Error("Division by zero is not allowed");
                }
                break;
            default:
                throw new Error("Invalid operator. Please use '+', '-', '*', or '/'");
        }
        return result;
    }
    const operator = '+';
    const operand1 = 5;
    const operand2 = 3;
    const rsult = calculate(operator, operand1, operand2);
    console.log(`Result: ${rsult}`);
}
