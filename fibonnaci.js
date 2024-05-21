function* fibonacciGenerator(limit) {
    let a = 0;
    let b = 1;
  
    // Yield the first two Fibonacci numbers
    yield a;
    yield b;
  
    // Generate and yield the remaining Fibonacci numbers up to the limit
    for (let i = 2; i < limit; i++) {
      let temp = a;
      a = b;
      b = temp + b;
      yield b;
    }
  }
  
  // Usage example
  const fibonacciSeries = fibonacciGenerator(10);
  for (let i = 0; i < 10; i++) {
    console.log(fibonacciSeries.next().value);
  }
  