
//flatten array

const array = [1,2,3,4,5];

const useReducer = arr => {
    return arr.reduce((a,b) => a - b)
}

console.log(useReducer(array));

const multiLevelArray = [[1,2],[3,4],[5,6],[7,8]];

const flatten = arr => {
    return arr.reduce((a,b) => a.concat(b))
}

console.log(flatten(multiLevelArray));

//higher order function
function loop(start,test,update,body){
    for (let value=start; test(value); value = update(body)){
        body(value);
    }
}
loop(3, n => n > 0, n => n - 1, console.log);

//everything

function every(arr,func){
    for (item in arr){
        if (!func(item)){
            return false;
        }
    }
    return true;
}

console.log(every([1, 3, 5], n => n < 10));

function every2(arr,func){
    return !arr.some(element => !func(element));
}
console.log(every2([1, 3, 5], n => n < 10));