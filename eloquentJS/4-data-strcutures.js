//the sum of a range

const rangeFunction = (start , end, step) => {
    let rangeArray = [];
    let num = start;

    let condition = num <= end;

    if (step == undefined) {
        step = 1
    }

    if (end < start){
        condition = num >= end;
    }
    while ( condition){
        if ( num == end ){
            rangeArray.push(num)
            return rangeArray
        }
        else {
            rangeArray.push(num)
            if (step){
                num = num + step
            }
            else {
                num++
            }
        }
        if (end < start){
            condition = num >= end;
        }
        else {
            condition = num <= end
        }           
    }
    return rangeArray
}
console.log('rangeFunction', rangeFunction(5,2,-1))
console.log('rangeFunction', rangeFunction(1,10))
console.log('rangeFunction', rangeFunction(1,10,2))

const sumFunction = ( start, end ) => {
    const getArray = rangeFunction(start,end);
    let counter = 0

    for ( i = 0; i < getArray.length; i++){
        counter = counter + getArray[i];
    }
    return counter
}
console.log('sumFunction', sumFunction(1,10));

const revers = (normalArr) => {
    reverseArr = []
    for ( i=normalArr.length-1; i>=0; i--){
        reverseArr.push(normalArr[i])
    }
    return reverseArr;
} 
console.log('reverse Array', revers([1,2,3,4,5]))

const reverseInPlace = (reversedArr) => {
    const normalArr = revers([reversedArr])
    return normalArr;
}
console.log('reverse in place', reverseInPlace(revers([10,20,30,40,50])))

let list = {
    value: 10,
    rest: {
        value: 20,
        rest: {
            value: 30,
            rest: null
        }
    }
};

console.log('list', list)

const arrayToList = arrayInput => {
    let outputList = null;

    for ( let i = arrayInput.length - 1; i >= 0; i--) {
        outputList = { value: arrayInput[i], rest: outputList}
    };
    console.log(outputList);
    return outputList;
}

console.log('arrayToList', arrayToList([1,2,3]));

const listToArray = listInput => {
    let outputArray = [];

    for ( let node = listInput ; node ; node = node.rest) {
        outputArray.push(node.value);
    };
    return outputArray; 
}
console.log('list to array', listToArray(list));

const object1 = {
    property1: "hello",
    property2: "goodbye"
};

const object2 = {
    property1: "hello",
    property3: "goodbye"
};

const deepEqual = (object1,object2) => {
    const object1Keys = Object.keys(object1);
    const object2Keys = Object.keys(object2);

    if (object1Keys.length != object2Keys.length) return false;
    
    for ( i=0; i<object1Keys.length; i++){
        if (!object2Keys.includes(object1Keys[i])) return false;
    }
    
    return true;
}

console.log('deepEqual', deepEqual(object1,object2));