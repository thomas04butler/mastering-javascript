//using while loop
let total = 0, count = 1
while (count <= 10) {
    total += count
    count ++
}
console.log(total)

//writing factorial function
function factorial(n){
    if (n==0) {
        return 1
    }
    else {
        return n * factorial(n-1)
    }
}

console.log(factorial(8))

//values - whole numbers, fractional numbers, large numbers
const value = 0;
console.log('value', value)

const whole = 2;
console.log('whole', whole)

const fract = 2.3467;
console.log('fractional numbers', fract)

const largeNum = 2.99e8 // 2.99 x 10^8
console.log('large numbers', largeNum)

//arithmetic
const operators = 100 + 4 * 11
console.log('100 + 4 * 11', operators)

const modulo = 200 % 23
console.log('200 % 23', modulo)

//special numbers
console.log('special numbers are; infinity, -infinity and NaN (not a number)')

//strings and new lines
const string = "This is a string"
console.log('string', string)

const newline = "This is a string\nand a new line"
console.log('newline', newline)

//concatenate strings
const concatenation = "Put" + "This" + "Together"
console.log("concatenation", concatenation)

//template literal
const tempLiteral = `This is calc ${100 / 50}`
console.log("template literal: ", tempLiteral)

//type of operator
console.log('type of operator', typeof 4.5)

//boolean values
const booleanVal = 3>2
console.log('boolean values', booleanVal)

//comparing
const stringBool = "Thomas" > "Butler"
console.log('string bool', stringBool)

const equalTo = "Thomas" == "Butler"
console.log('equalTo', equalTo)

const notEqualTo = "Thomas" != "Butler"
console.log('notEqualTo', notEqualTo)

//logical operators
console.log('logical operators AND', true && false)
console.log('logical operators OR', true || false)

//conditional operator
console.log('conditional operator: true ? 1 : 2', true ? 1 : 2)
console.log('if true then is 1, if not then is 2')

//null and undefined
const val1 = 0
console.log('null', val1 != null)

// === and 1==
console.log('===', 0 === "false")

//fallback value
console.log('||', 2==2 || 1)
console.log('??', null || 1)

//functions
console.log('Max', Math.max(2,3,4))
console.log('Min', Math.min(2,3,4))

//comverting to number string or bool
console.log('number', Number("12"))
console.log('string', String(12))

//if condition
const condition = 12;
if (!Number.isNaN(condition)){
    console.log("hello")
}
else {
    console.log("goodbye")
}

//exercises
function hashtagNumbers(num) {
    for ( i = 0; i < num; i++){
        console.log('#'.repeat(i+1));
    }
}

hashtagNumbers(7);

function fizzBuzz (num) {
    for ( i = 0; i <= num; i++){
        let output = "";
        if ( i % 3 == 0 ) {
            output += "Fizz"
        }
        if ( i % 5 == 0 ) {
            output += "Buzz"    
        }
        console.log(output || i)
    }
}

fizzBuzz(100)
function chessBoard(num) {
    for ( i = 0; i < num; i++){
        if ( i % 2 == 0 ){
            console.log(" #".repeat(num/2))
        }
        else {
            console.log("# ".repeat(num/2))
        }
    }
}

chessBoard(8)

//different ways to define a function
const function1 = function(distance, speed){
    return distance * speed;
}

console.log('function 1', function1(2,6));

function function2(distance, speed){
    return distance * speed;
}

console.log('function 2', function2(2,6));

const function3 = (distance, speed) => {
    return distance * speed;
}

console.log('function 3', function3(2,6));

const min = (num1,num2) => {
    if (num1 > num2) {
        return num2
    }
    else {
        return num1
    }
}
console.log('min 3,7', min(3,7))

console.log('min 9,7', min(9,7))

const isEven = num => {
    if ( num - 2 == 0){
        return 'Even';
    }
    else if (num - 2 == 1){
        return 'Odd';
    }
    else {
        return isEven( num - 2 );
    }
}
console.log('recursive is even', isEven(57));

const countBs = word => {
    let counter = 0;
    for ( i=0; i<word.length; i++){
        if ( word[i] === 'B'){
            counter ++
        }
    }
    return counter;
}
console.log('countBs', countBs('BBjdjdB'));

const countChars = (word,letter) => {
    let counter = 0;
    for ( i=0; i<word.length; i++){
        if ( word[i] === letter){
            counter ++
        }
    }
    return counter;
}
console.log('countChars', countChars('BBjdjdB', 'j'));

const creatingObject = {
    property1 : 'first property',
    property2 : 'second property'
};
console.log('creating object', creatingObject)
console.log('first property', creatingObject.property1)
console.log('second property', creatingObject.property2)
console.log('in object', "property1" in creatingObject)


//object keys
console.log('object keys', Object.keys(creatingObject));

//object assign
const assignToObject = {
    property2 : 'property second',
    property3 : 'third property'
};

Object.assign(creatingObject, assignToObject);
console.log('asigned to object', creatingObject);

//array includes method
arrayInclude = ['united', 'city', 'fc']
console.log('include method', arrayInclude.includes('united'));

//modern javascript loop
for (let entry of arrayInclude){
    console.log(entry)
}

//array methods
let arrayMethods = [1,2,3,4,5,1];
arrayMethods.push(6);
console.log('after push', arrayMethods)

arrayMethods.pop();
console.log('after pop', arrayMethods)

arrayMethods.shift();
console.log('after shift', arrayMethods)

arrayMethods.unshift(1);
console.log('after unshift', arrayMethods)

console.log('index of 1', arrayMethods.indexOf(1))
console.log('last index of 1', arrayMethods.lastIndexOf(1))

console.log('slice of', arrayMethods.slice(2,4))

let newArrayMethods = arrayMethods.concat(arrayMethods.slice(2,4));
console.log('concat array', newArrayMethods)

//string methods
console.log('slice of string', "thomas".slice(3))
console.log('index of string', "thomas".indexOf("a"))

console.log("     thomas butler ".trim())

console.log("thomas".padStart(20, "X"))

let sentence = "thomas andrew butler"
let semtenceWords = sentence.split(" ")
console.log("split string", semtenceWords)
let sentenceAgain = semtenceWords.join(" ")
console.log("join words", sentenceAgain)

console.log("TB".repeat(6))

//to accept any number of arguments
const unlimitedArgs = (...numb) => {
    for (num in numb){
        console.log(Math.sqrt(num))
    }
}
console.log('any number of args', unlimitedArgs(2,6,7,47,937))

const numberArray = [2,3,4,5,6]
console.log(unlimitedArgs(...numberArray))

//Math Object
console.log('sine', Math.sin(23));
console.log('cos', Math.cos(23));
console.log('tan', Math.tan(23));
console.log('pi', Math.PI);
console.log('random', Math.random())
console.log('math florr', Math.floor(Math.random() * 10))
console.log('ceiling', Math.ceil(23.567))
console.log('round', Math.round(23.567))
console.log('absolute', Math.abs(-23.567))

//JSON stringify and parse
let objectToJSON = {
    "first" : "Thomas",
    second : 23
}
console.log("stringify", JSON.stringify(objectToJSON))

let stringifiedObject = JSON.stringify(objectToJSON)
console.log("parse", JSON.parse(stringifiedObject).first)