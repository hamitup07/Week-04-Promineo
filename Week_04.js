//Promineo FE Week 4, Steve Hamilton


//Step 1:
console.log("Step 1:");

let ages = [3, 9, 23, 64, 2, 8, 28, 93];


console.log(ages[ages.length - 1] - ages[0]);

//Step 1b: The method is dynamic

ages.unshift(45);

console.log(ages[ages.length - 1] - ages[0]);

//Step 1c: Find average of ages in the array

var totalAge = 0;

for (let i = 0; i < ages.length; i++) {
    totalAge += ages[i];
}

console.log(`The average age is ${totalAge / ages.length}`);


//Step 2:

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

var totalLetters = 0;

for (let i = 0; i < names.length; i++) {
    totalLetters += (names[i].length);
}

console.log("Step 2: Arrays with names.");
console.log(`The average age is ${totalLetters / names.length}`);

//Step 2b: Concatenate the array

arrayConCat = "";

for (let i = 0; i < names.length; i++) {
    arrayConCat += `${names[i]} `;
}

console.log(`The list of names is: ${arrayConCat}`);


//Step 3: To access the last element of an array:

console.log(names[names.length -1]);


//Step 4: To access the first element of an array:

console.log(ages[0]);


//Step 5:

let nameLengths = []

for (let i = 0; i < names.length; i++) {
    nameLengths.unshift(names[i].length);
}

console.log("Step 5: A loop to add lengths of names.");
console.log(nameLengths);


//Step 6:

lengthsSum = 0

for(let i = 0; i < nameLengths.length; i++) {
    lengthsSum += nameLengths[i];
}

console.log("Step 6: A loop to calculate the sume of array elements.");
console.log(lengthsSum);


//Step 7:

let step7Function = (word, n) => {
    let output = "";
    for (let i = 0; i < n; i++) {
        output += word
    }
    return output
}

console.log("Step 7: A function to repeat a word.");
console.log(step7Function("Hey-o!", 6));


//Step 8:

let nameFunction = (firstName, lastName) => `${firstName} ${lastName}`

console.log("Step 8: Concat first and last name.");
console.log(nameFunction("Seamus", "MacGuffrey"));


//Step 9:

let over100 = (array) => {
    let arrayTotal = 0;
    for (let i = 0; i < array.length; i++) {
        arrayTotal += array[i];
    }
    console.log(arrayTotal);
    return arrayTotal > 100
}

let firstArray = [1, 2, 89, 46];
let secondArray = [6, 7, 10];

console.log("Step 9: Greater than 100?");
console.log(over100(firstArray));
console.log(over100(secondArray));


//Step 10:

let avgValue = (array) => {
    let arrayTotal = 0;
    for (let i = 0; i < array.length; i++) {
        arrayTotal += array[i];
    }
    console.log(array);
    return arrayTotal / array.length;
}

console.log("Step 10: Average number of all numbers in an array.");
console.log(avgValue(firstArray));
console.log(avgValue(secondArray));

//Step 11:

let compareAvg = (array1, array2) => {
    let array1Total = 0;
    let array2Total = 0;
        for (let i = 0; i < array1.length; i++) {
        array1Total += array1[i];
    }
    console.log(array1);
    console.log(array1Total);
    let array1avg = array1Total / array1.length;
 
        for (let i = 0; i < array2.length; i++) {
        array2Total += array2[i];
    }
    console.log(array2);
    console.log(array2Total);
    let array2avg = array2Total / array2.length;
    
    if (array1avg > array2avg){
        return true;
    }
    else {
        return false;
    }
    
}
console.log("Step11: Compare averages of two arrays.")
console.log(compareAvg(firstArray, secondArray));


//Step 12:
let willBuyDrink = (isHotOutside, moneyInPocket) => {
    if (isHotOutside && moneyInPocket > 10.50) {
        return true;
    }
    else {
        return false;
    }
}

console.log("Step 12: Should I buy a drink?");
console.log(`Buy?: ${willBuyDrink(true, 10.15)}`);
console.log(`Buy?: ${willBuyDrink(false, 11.00)}`);


//Step 13:
let questionsTime = [15, 15, 4, 2, 1, 15, 10, 10, 5, 5, 5, 30, 10]
let totalTime = 0; 

let calculateAvgTime = (array) => {
    
    for (let i = 0; i < array.length; i++) {
         totalTime += array[i];
    }
    console.log(`The average time it took to answer each question was ${(totalTime / array.length - 1)} minutes`);    
}
console.log("Step 13: Solve a problem.");
console.log(calculateAvgTime(questionsTime));

//I chose to create a function that would calculate the average time I spent answering coding questions because this assignment took me longer than I thought it would. 
//I can use this function to track my progress by entering a new array of numbers for a different assignment. 


