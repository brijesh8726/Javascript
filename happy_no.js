
function happy(i) {
    let temp = new Set()
    while (i !== 1) {
        sum = 0
        while (i > 0) {
            sum += (i % 10) * (i % 10)
            i = Math.floor(i / 10)
        }

        if (temp.has(sum)) {
            return ("It is not a Happy Number")
        }
        else {
            temp.add(sum)
            i = sum
        }
    }
    return (i+"It is a happy number")
}

console.log(happy(19))