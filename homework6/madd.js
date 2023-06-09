function madd(a,b){
    const rows = a.length
    const columns = a[0].length
    const result = []
    const row = [[],[]]
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < columns; j++) {
            row[i][j]=a[i][j] + b[i][j]
        }           
    }   
    return row
}
const a = [[1, 2], [3, 4]]
const b = [[5, 6], [7, 8]]
const result = madd(a,b)
console.log(result)