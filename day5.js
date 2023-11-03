let plusOne = (arr) => {
    for (let i = 0; i < 3; i++) {
        arr[i] = arr[i] + 1
    }
    return arr
}
let plusI = (arr) => {
    for (let i = 0; i < 3; i++) {
        arr[i] = arr[i] + 3
    }
    return arr
}
let constant = (arr) => {
    for (let i = 0; i < 3; i++) {
        arr[i] = 42
    }
    return arr
}
let map = (arr, fn) => {
    return fn(arr)
}

let array = [1,2,3]

console.log(map(array, constant))