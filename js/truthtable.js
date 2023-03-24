function truthTable(n)
{
   var t= Math.pow(2,n)
   for(var i=0; i<t; i++)
   {
    var x= i.toString(2).padStart(n,'0')
    console.log(x)
   }
}
truthTable(4)