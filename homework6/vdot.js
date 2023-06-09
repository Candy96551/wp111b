function vdot(a, b) {
    let result = 0
    for (let i = 0; i < a.length; i++) {
      result += a[i] * b[i]
    }
    return result
}
let v1 = [1, 2], v2 = [2, 3]   
console.log(vdot(v1,v2))