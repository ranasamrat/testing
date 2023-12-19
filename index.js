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
function calculateArea(width, height) {
    const area = width * height;
    return area;
}
const rectangleWidth = 5;
const rectangleHeight = 10;
const areaOfRectangle = calculateArea(rectangleWidth, rectangleHeight);
console.log(`The area of the rectangle is: ${areaOfRectangle}`);
export {};
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
// Splice
// let names: string[] = ['Alice', 'Bob', 'Charlie', 'David'];
// names.splice(2, 1, 'Eve'); 
// console.log(names); 
// Slice
// let days: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
// let slicedDays: string[] = days.slice(1, 4); // 
// console.log(slicedDays); 
