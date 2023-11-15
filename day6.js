let greaterThan10 = (n) => {
    return n > 10
}
let firstIndex = (n,i) => {
    return n[i]
}
let plusOne = (n) => {
    return n + 1
}

let filter = (arr, fn) => {
    let result = fn(arr)
    for (const i of result) {
        return result[i]
    }
}

array = [0,10,20,30]

let test = filter(array, greaterThan10)
console.log(test)