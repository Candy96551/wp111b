function truthTable(n)
{
   var a= Math.pow(2,n)
   for(var i=0; i<a; i++)
   {
    var x= i.toString(2).padStart(n,'0')
    console.log(x)
   }
}
truthTable(4)