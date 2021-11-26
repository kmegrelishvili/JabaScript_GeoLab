let arr = [14, 2, 45, 13, 54, 66, 21, 40]


// minის და max-ის პოვნა ლუპით
let min = arr[0]
for (num of arr) {
    if (num < min) {
        min = num
    }
}
console.log("The min of this array is " + min);


let max = arr[0]
for (num of arr) {
    if (num > max) {
        max = num
    }
}

console.log("The max of this array is " + max);

// სავარჯიშო ორი 
function inPowerOf(base, power) {
    let result = base ** power
    return result
}
console.log(inPowerOf(2, 3));
console.log(inPowerOf(4, 2));



//სავარჯიშო სამი 
const f = (a, b) => a ** b;

console.log(f(2, 6))

//მინი და მაქსი reduce-is დახმარებით


const reducerMin = (previousValue, currentValue) => {
    if (previousValue > currentValue) {
        previousValue = currentValue
    }
    return previousValue
}


const reducerMax = (previousValue, currentValue) => {
    if (previousValue < currentValue) {
        previousValue = currentValue
    }
    return previousValue
}


console.log("Min Value is " + arr.reduce(reducerMin));

console.log("Max Value is " + arr.reduce(reducerMax));