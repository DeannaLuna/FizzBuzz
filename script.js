// promt to enter a number
// assign that number to a value
// for loop? to loop through until the number is reached. i < input
// print number and if statements for if number in for loop is % of 5 or 3 or both

let input = parseInt(prompt("Enter a number:"));


for (let i = 1; i <= input; i++){
    if (i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz")
    }
    else if (i % 3 == 0){
        console.log("Fizz")
    }
    else if (i % 5 == 0){
        console.log("Buzz")
    }
    else{
        console.log(i)
    }
}