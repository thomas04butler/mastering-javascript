const unflatArray = [2,9,6,[4,5,6,[3,5],5],0,1]

//using .flat(Infinity)
const flatArrayV1 = unflatArray.flat(Infinity)
console.log('using .flat(Infinity)', flatArrayV1)

//using recursive helper function

function flatten (arr){
    const flatArrayV2 = []
    let counter = 0

    while (counter < arr.length) {
        if (Array.isArray(arr[counter])){
            flatten(arr[counter])
        }
        else{
            flatArrayV2.push(...arr[counter])
        }
        counter++;   
    }
    return flatArrayV2
}

console.log('using recursive helper function', flatten(unflatArray))