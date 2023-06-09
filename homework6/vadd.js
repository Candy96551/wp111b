function vadd(x, y) {
    let result = []
    for (let n = 0; n < x.length; n++) {
        result[n] = x[n] + y[n]
    }
    return result
}

let v1 = [1, 2], v2 = [2, 1]    
console.log(vadd(v1, v2))
