function mmul(a, b) {
    const rows = a.length
    const columns = b[0].length
    const common = a[0].length
  
    const result = []
    for (let i = 0; i < rows; i++) {
        const row = []
        for (let j = 0; j < columns; j++) {
            let sum = 0
            for (let k = 0; k < common; k++) {
                sum += a[i][k] * b[k][j]
            }
        row.push(sum)
        }
        result.push(row)
    } 
    return result;
}


let a = [[1, 2], [3, 4]];
let b = [[5, 6], [7, 8]];
let c = mmul(a, b)
console.log(c)