function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  function checkPrimeArray(arr) {
    const primeArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (isPrime(arr[i])) primeArr.push(arr[i]);
    }
    return primeArr;
  }
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(checkPrimeArray(numbers)); // [2, 3, 5, 7]
    