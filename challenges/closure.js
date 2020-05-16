// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */
// A nested function is able to access the internal variable becuase nested functions have access to the scope above them. Since function myFunction is above 
// nestedFunction its able to access the variable internal and be used in its own function. 

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 


/* Task 2: Counter */
/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. 
For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
function sumation(number){
  let sum = 0;
for (i = 1; i <= number ; i++){
sum += i;
}
return sum
}
console.log(sumation(4));