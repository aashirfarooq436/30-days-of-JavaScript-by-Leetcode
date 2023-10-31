let expect = function(val1) {
    return {
        toBe: function (val2) {
                if (val1 === val2) return true
                else throw new Error("Not Equal")
        },
        notToBe: function (val2) {
                if (val1 !== val2) return true
                else throw new Error("Equal")
            }
        }
}
let test = expect(5).toBe(4)
console.log(test)