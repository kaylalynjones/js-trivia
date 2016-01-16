var fizzbuzz = function() {
  for(i=0; i<100; i++) {
    if ( divisibleByThree(i) ) {
      console.log('Fizz');
    } else if ( divisibleByFive(i) ) {
      console.log('Buzz');
    } else if ( divisibleByThreeAndFive(i) ) {
      console.log('FizzBuzz');
    }
  }
}

function divisibleByThree(i) {
  return i%3;
}

function divisibleByFive(i) {
  return i%5;
}

function divisibleByThreeAndFive(i) {
  return (i%3 === 0) && (i%5 === 0);
}

fizzbuzz();
