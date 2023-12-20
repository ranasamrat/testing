import inquirer from "inquirer";
import chalk from "chalk";
let paymentOPts = ["credit card", "cash", "Jazz Cash"];
/* paymentOPts.map((arr) => {
  console.log(arr);
}); */
let totalbill = 0;
let fruits = [
    { id: 1, item: "Apple", price: 10 },
    { id: 2, item: "Orange", price: 20 },
    { id: 3, item: "Peach", price: 30 },
];
let vegetables = [
    { id: 1, item: "Cucumber", price: 10 },
    { id: 2, item: "Potato", price: 20 },
    { id: 3, item: "Tomatto", price: 30 },
];
let getGrocery = async () => {
    let item = await inquirer.prompt([
        {
            name: "choice",
            type: "list",
            message: "What you would shop today \n",
            choices: ["Fruit", "Vegetable", "Checkout"],
        },
    ]);
    if (item.choice === "Fruit") {
        let fruit = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "Which vegetable you like",
                choices: [fruits[0].item, fruits[1].item, fruits[2].item],
            },
        ]);
        let quan = await inquirer.prompt([
            {
                name: "quantity",
                type: "number",
                message: "Quantity:",
            },
        ]);
        if (fruit.choice === fruits[0].item) {
            totalbill = totalbill + quan.quantity * fruits[0].price;
        }
        else if (fruit.choice === fruits[1].item) {
            totalbill = totalbill + quan.quantity * fruits[1].price;
        }
        else if (fruit.choice === fruits[2].item) {
            totalbill = totalbill + quan.quantity * fruits[2].price;
        }
    }
    if (item.choice === "Vegetable") {
        let vegetable = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "Which vegetable you like",
                choices: [vegetables[0].item, vegetables[1].item, vegetables[2].item],
            },
        ]);
        let quan = await inquirer.prompt([
            {
                name: "quantity",
                type: "number",
                message: "Quantity:",
            },
        ]);
        if (vegetable.choice === vegetables[0].item) {
            totalbill = totalbill + quan.quantity * vegetables[0].price;
        }
        else if (vegetable.choice === vegetables[1].item) {
            totalbill = totalbill + quan.quantity * vegetables[1].price;
        }
        else if (vegetable.choice === vegetables[2].item) {
            totalbill = totalbill + quan.quantity * vegetables[2].price;
        }
    }
    console.log(`Total Bill is ${totalbill}`);
    checkOut(totalbill);
};
let checkOut = async (totalbill) => {
    let check = await inquirer.prompt([
        {
            name: "checkout",
            type: "list",
            message: "What is your preffered checkout method",
            choices: paymentOPts,
        },
    ]);
    for (let i = 0; i < paymentOPts.length; i++) {
        if (check.checkout === paymentOPts[i]) {
            console.log(chalk.red(`Your payment of ${totalbill} is processed using ${check.checkout}`));
        }
    }
};
getGrocery();
console.log(vegetables);
// let itemPrice: number = 75;
// let availableBalance: number = 100;
// let hasCreditCard: boolean = true;
// let hasMembership: boolean = true;
// // Decision-making based on different scenarios
// if (itemPrice <= availableBalance) {
//     console.log("You can purchase the item using your available balance.");
// } else if (hasCreditCard) {
//     console.log("You can use your credit card to make the purchase.");
// } else if (hasMembership) {
//     console.log("You might have a discount with your membership.");
// } else {
//     console.log("Sorry, you don't have enough funds and no other options available.");
// }
// Task 2
// Scenario 1
// function add(number1: number, number2: number) {
//   return number1 + number2; //10 + 20 = 30
// }
// let result: number = add(50, 20);
// console.log(result);
// Scenario 2
// function checkEvenOrOdd(givenNumber: number) {
//     if (givenNumber % 2 === 0) {
//       return "Your Number is Even";
//     } else {
//       return "Your Number is Odd";
//     } // Moduolo Operator
//   }
//   console.log(checkEvenOrOdd(11));
// Scenario 3
// function calculateArea(width: number, height: number): number {
//     const area: number = width * height;
//     return area;
// }
// const rectangleWidth: number = 5;
// const rectangleHeight: number = 10;
// const areaOfRectangle: number = calculateArea(rectangleWidth, rectangleHeight);
// console.log(`The area of the rectangle is: ${areaOfRectangle}`);
// Scenario 4
// function reverseString(inputString: string): string {
//   return inputString.split('').reverse().join('');
// }
// const originalString: string = "Hello, World!";
// const reversedString: string = reverseString(originalString);
// console.log(`Original String: ${originalString}`);
// console.log(`Reversed String: ${reversedString}`);
// Scenario 5
// function convertCelsiusToFahrenheit(celsius: number): number {
//   const fahrenheit: number = (celsius * 9 / 5) + 32;
//   return fahrenheit;
// }
// const celsiusTemperature: number = 25;
// const fahrenheitTemperature: number = convertCelsiusToFahrenheit(celsiusTemperature);
// console.log(`${celsiusTemperature}°C is equal to ${fahrenheitTemperature}°F`);
// Task 3
// Scenario 1
// Push 
// let numbers: number[] = [1, 2, 3, 4];
// numbers.push(5); 
// console.log(numbers); 
// Pop
// let colours: string[] = ['red', 'green', 'blue'];
// let removedColour: string = colours.pop(); 
// console.log(colours); 
// console.log(removedColour); 
// Shift
// let animals: string[] = ['lion', 'elephant', 'tiger'];
// let removedAnimal: string = animals.shift(); 
// console.log(animals); 
// console.log(removedAnimal); 
// Unshift
// let fruits: string[] = ['apple', 'banana', 'orange'];
// fruits.unshift('grape'); 
// console.log(fruits); 
// // Splice
// let names: string[] = ['Alice', 'Bob', 'Charlie', 'David'];
// names.splice(2, 1, 'Eve'); 
// console.log(names); 
// Slice
// let days: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
// let slicedDays: string[] = days.slice(1, 4); // 
// console.log(slicedDays); 
// console.log("Done");
// console.log("Rana Saab");
