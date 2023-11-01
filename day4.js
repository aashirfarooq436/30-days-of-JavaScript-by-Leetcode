let createCounter = (init) => {
    let n = init
    return {
        increment: () => {
            n = n + 1
            return n
        },
        decrement: () => {
            n = n - 1
            return n
        },
        reset: () => {
            n = init
            return n
        }
    }
}

const counter = createCounter(0)
console.log(counter.increment())
console.log(counter.increment())
console.log(counter.decrement())
console.log(counter.reset())
console.log(counter.reset())