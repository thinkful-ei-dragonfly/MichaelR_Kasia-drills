'use strict';

function maxNumbers(numbers){
  let maxNum = 0;
  let i = 0;
  while (i< numbers.length){
    if (numbers[i] > maxNum){
      maxNum = numbers[i];
    }
    i++;
  }
  return maxNum;
}
console.log(maxNumbers([1,6,23,345]));


function minNumbers(numbers){
  let minNum = numbers[0];
  let i = 1;
  while (i< numbers.length){
    if (numbers[i] < minNum){
      minNum = numbers[i];
    }
    i++;
  }
  return minNum;
}
console.log(minNumbers([1,6,23,345]));


function avarage(arr){ 
  let sum =0;
  arr.forEach(item => sum =+ item);
  return sum / arr.length;
}
console.log(avarage([1,6,23,345]));

function repeat(fn, n){
  for ( let i = 0; i < n; i ++){
    fn();
  }
}

function hello(){
  console.log('hello world');
}
function goodbye(){
  console.log('goodbuy world');
}
console.log(repeat(hello, 6));


function filter(arr, fn) {
  let namesArr = [];
  for (let i = 0; i< arr.length; i++){
    if (fn(arr[i]) === true){
      namesArr.push(arr[i]);
    }
  }
  return namesArr;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
  // This is known as a "predicate function" - it's a function that 
  // only returns a boolean
  return name[0] === 'R';
});

console.log(filteredNames); // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

function hazardWarningCreator(typeOfWarning) {
  let warningCounter = 0;
  let time = 'time';
  return function (location) {
    warningCounter++;
    if (warningCounter > 1) {
      time = 'times';
    }
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} ${time} today!`);
  };
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const floodWarning = hazardWarningCreator('Flooding in the roads');
const hurricaneWarning = hazardWarningCreator('Hurricane force windss');

rocksWarning('Main St and Pacific Ave');
rocksWarning('Centinela Ave and Olympic Blvd');
hurricaneWarning('1st and 3rd');

const movements = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

function turtleMoves(moves) {
  moves
    .filter(move => {
      return move[0] > -1 && move[1] > -1;
    })
    .map(move => move[0] + move[1])
    .forEach((move, i) => {
      console.log(`Movement #${i + 1}: ${move} steps`);
    });
}

turtleMoves(movements);

const codedMessage = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';

function decodeSentence(sentence) {
  let initialValue = '';
  const reducer = ((acc, curVal) => {
    if (curVal.length === 3) {
      return acc + ' ';
    } else {
      return acc + curVal[curVal.length - 1].toUpperCase();
    }
  });
  return sentence
    .split(' ')
    .reduce((reducer), initialValue);
}

console.log(decodeSentence(codedMessage));