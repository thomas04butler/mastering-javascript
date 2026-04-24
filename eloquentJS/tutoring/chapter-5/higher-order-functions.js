//2.1 Write a function count(n, predicate) that returns how many numbers from 0 to n-1 pass the predicate. Use a regular for loop internally.

const count = (n, predicate) => {
    let counter = 0;

    for ( let i=0; i<n; i++){
        if (predicate(i)){
            counter++
        }
    }
    
    return counter;
}

console.log(count(20, x => x % 2 === 1));
console.log(count(10, x => x % 2 === 0));
console.log(count(20, x => x > 15));

//2.2 Write your own myFilter(array, test) without using .filter(). Use a for...of loop. (The book shows this one — don't peek. Try to derive it.)

const myFilter = (array, test) => {
    let filteredArray = [];
    for (let item of array) {
        if (test(item)){
            filteredArray.push(item)
        }
    };
    
    return filteredArray;
}

console.log(myFilter([1,2,3,4,5], x => x > 3));

//Write your own myMap(array, transform) without using .map().

const myMap = (array, transform) => {
    let transformedArray = [];
    for (let item of array){
        transformedArray.push(transform(item));
    };
    
    return transformedArray;
}

console.log(myMap([1,2,3,4,5], x => x * 2));

//Write your own mySome(array, test) without using .some(). Remember it should stop early — as soon as one element passes, return true.

const mySome = (array, test) => {
    for (let item of array){
        if (test(item)){
            return true;
        }
    }
    
    return false;
}

console.log(mySome([1,2,3,4,2], x => x == 2));

//2.5 Write findFirst(array, test) that returns the first element passing the test, or undefined if none do. (You're basically rebuilding .find().)

const findFirst = (array, test) => {
    for (let item of array){
        if (test(item)){
            return item;
        }
    }
    
    return;
}

console.log(findFirst([1,2,3,4,2], x => x == 2));

//2.6 Write minBy(array, scoreFn) that returns the element of the array with the smallest score, where the score is whatever scoreFn(element) returns. Example:

const minBy = (array, scoreFn) => {
    let minEntry = array[0];
    for (let item of array){
        if (scoreFn(item) < (scoreFn(minEntry))){
            minEntry = item;
        }
    }
    return minEntry;
}

console.log(minBy([{ name: "Thomas", age: 30}, {name: "Andrew", age: 52}, {name: "James", age: 12}], x => x.age));
console.log(minBy([{ name: "Thomas", age: 30, score: 50}, {name: "Andrew", age: 52, score: 1}, {name: "James", age: 12, score: 37}], x => x.score));

//The loop exercise from the book

const loop = (start, test, update, body) => {
    for ( let value = start; test(value); value = update(value)){
        body(value);
    }
}

loop(3, n => n > 0, n => n - 1, console.log);;