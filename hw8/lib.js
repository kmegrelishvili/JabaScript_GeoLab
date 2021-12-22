export function sum() {
    console.log(arguments)
    let add = 0;
    for (let i of arguments) {
        add = add + i
    }
    console.log('this is Sum', add)
    return add
}

function square(x) {
    return x ** 2
}

export default {
    square
}
