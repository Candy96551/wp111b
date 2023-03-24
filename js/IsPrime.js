function IsPrime(n)
{
    if(n<=1)
    {
        return false;
    }
    if(n == 2 || n == 3)
    {
        return true;
    }
    for(let i=2 ; i<n-1 ; i++ )
    {
        if(n % i == 0)
        {
            return false;
        } 
    }
    return true;

    
}   
console.log(IsPrime(1))
console.log(IsPrime(3))
console.log(IsPrime(5))
console.log(IsPrime(7))
console.log(IsPrime(9))
console.log(IsPrime(11))
console.log(IsPrime(12))
