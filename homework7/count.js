function count(words){
    let camp = {}
    for(let word of words){
        let c = camp[word]
        if(c == null)
            camp[word] = 1
        else
            camp[word] =camp[word]+1    
    }
    return camp
}
var list =['a' , 'dog','chase','a','cat']
var camp = count(list)
console.log(camp)