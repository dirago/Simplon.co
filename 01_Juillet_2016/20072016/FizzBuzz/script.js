for (var i = 0; i <= 100; i++){
    if ((i % 5) == 0 && (i % 7) == 0) {
        console.log(i + " FizzBuzz");
    }
    else if ((i % 5) == 0) {
        console.log(i + " Buzz");
    }
    else if ((i % 7) == 0) {
        console.log(i + " Fizz");
    }
    else {
        console.log(i);
    }
}
