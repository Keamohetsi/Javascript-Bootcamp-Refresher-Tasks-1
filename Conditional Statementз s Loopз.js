// Temperature check

// 1. If statement
let temperature = 20; 

if (temperature < 0) {
    console.log("It's freezing!");
} else if (temperature >= 0 && temperature <= 15) {
    console.log("It's cold.");
} else if (temperature >= 16 && temperature <= 25) {
    console.log("It's mild.");
} else {
    console.log("It's warm.");
}

// 2. Re-write code using Switch statement
switch (true) {
    case (temperature < 0):
        console.log("It's freezing!");
        break;
    case (temperature >= 0 && temperature <= 15):
        console.log("It's cold.");
        break;
    case (temperature >= 16 && temperature <= 25):
        console.log("It's mild.");
        break;
    default:
        console.log("It's warm.");
        break;
}

//Divisibility check
// 1. If else statement
let number = 6;  // Example number, you can change it

if (number % 2 === 0 && number % 3 === 0) {
    console.log("Divisible by both.");
} else if (number % 2 === 0) {
    console.log("Divisible by 2.");
} else if (number % 3 === 0) {
    console.log("Divisible by 3.");
} else {
    console.log("Not divisible by 2 or 3.");
}

// 2. Switch statement
switch (true) {
    case (number % 2 === 0 && number % 3 === 0):
        console.log("Divisible by both.");
        break;
    case (number % 2 === 0):
        console.log("Divisible by 2.");
        break;
    case (number % 3 === 0):
        console.log("Divisible by 3.");
        break;
    default:
        console.log("Not divisible by 2 or 3.");
        break;
}

//For loops
// 1. Print numbers from 1 to 10.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2. Print all even numbers between 1 and 20.
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
// 3. Calculate the sum of all numbers from 1 to 100 and print the result.
let totalSum = 0;
for (let i = 1; i <= 100; i++) {
    totalSum += i;
}
console.log("Sum from 1 to 100:", totalSum);

// 4. Given the array of numbers, print each element to the console.
const numbers = [1, 2, 3, 4, 5];
for (let number of numbers) {
    console.log(number);
}

// 5. Given the array of numbers, find and print the largest number.
const nums = [3, 7, 2, 5, 10, 6];
let largestNumber = nums[0];
for (let number of nums) {
    if (number > largestNumber) {
        largestNumber = number;
    }
}
console.log("Largest number:", largestNumber);

//While loop

// 1. Print numbers from 1 to 10.
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// 2. Print all even numbers between 1 and 20.
i = 1;
while (i <= 20) {
    if (i % 2 === 0) {
        console.log(i);
    }
    i++;
}

// 3. Calculate the sum of all numbers from 1 to 100 and print the result.
i = 1;
totalSum = 0;
while (i <= 100) {
    totalSum += i;
    i++;
}
console.log("Sum from 1 to 100:", totalSum);

// 4. Print all multiples of 5 less than 50.
i = 1;
while (i < 50) {
    if (i % 5 === 0) {
        console.log(i);
    }
    i++;
}

//Do while loop
// 1. Print numbers from 1 to 10.
i = 1;
do {
    console.log(i);
    i++;
} while (i <= 10)
