// exercise 1
function ret() {
    let arr = [...arguments];
    let numarr = arr.filter(x => Number.isInteger(x))
    // console.log(numarr)
    const map1 = numarr.map(x => {
        if (x % 2 === 0) {
            x = x / 2
        } else {
            x = x ** 2
        }
        return x
    })
    // console.log(map1)
    let reduce1 = map1.reduce((previousValue, currentValue) => {
        previousValue += currentValue;
        return previousValue
    })
    reduce1 = Math.round(reduce1 / 2)
    console.log("საბოლოო ჯამის ნახევარი არის:")

    return reduce1

}

console.log(ret(2, 4, 5, 8, 12, "test", null))
console.log(ret(2, 5, 5, 8, 0, "test", null))
console.log(ret(1, 1, 1, 1, 0, "test", null))

// დავალება 2 

let numArray = [4, 5, 11, 2, 9, 99, 1092, 1]
numArray.sort(function (a, b) {
    return a - b;
});
console.log("ზრდადობით დალაგება: ")
console.log(numArray)

// დავალება 3 
console.log("filetering even numbers: ")
const filteredArr = numArray.filter(x => x % 2 == 0);
console.log(filteredArr);

//დავალება 4

const reduce2 = filteredArr.reduce((x, y) => x * y)
console.log("counting the prodcut of filetered array elements: ")
console.log(reduce2)

// დავალება 5 

let words = ['HELLO', 'WORLD', 'JS', 'GEOLAB']
let newWords = words.map(x => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase()).reduce((x, y) => {
    x = x + " " + y;
    return x
}
)


console.log(words)

console.log(newWords)