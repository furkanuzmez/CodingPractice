function factorialRecursive(n) {
  // n =3 3*f(2)
  // n=2  2*f(1)
  // n=1  1*1
   if(n==1) {
    return 1;
   }
   return n * factorialRecursive(n-1);    
}





console.log(factorialRecursive(5))


// 5*4*3*2*1
// 5*4!
// 