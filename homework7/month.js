var m2i = {
    January : 1,
    February : 2,
    March : 3,
    April : 4,
    May : 5,
    June : 6,
    July : 7,
    Augst : 8,
    September : 9,
    October : 10,
    November : 11,
    December : 12
    }
    function MonthToIndex(month){
        return m2i[month]
    } 
    let month = Deno.args[0]
    console.log(month,'=',MonthToIndex(month))