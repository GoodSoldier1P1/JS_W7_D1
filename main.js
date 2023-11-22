//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
`Matched ${dog_name}` if name is in the string, if its not a match console.log "No Match"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(astring, names){
    for (let i=0; i<names.length; i++){ // while i is < the length of names, increment
        if (astring.toLowerCase().includes(names[i].toLowerCase())){ // convert to lowercase and check if astring includes the lowered index of names
            console.log(`Matched: ${names[i]}`);  // if it does, match it and console log it
        } else {
            console.log("No Match"); // if it doesn't, tell us it doesn't
        }
    }
}

//Call method here with parameters
console.log(findWords(dog_string, dog_names)) // call it and pass in the given parameters

//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let given_arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"] // converted Given arr = [...] to let given_arr = [...] so that it can be used. Hindsight, could of used const

function replaceEvens(arr){
    for (let i=0; i<arr.length; i+=2){ // while the length of arr is > i, increment by two
        arr.splice(i, 1, "even index") // start splicing at i, with 1 ele effected, what we are replacing i with
    }
}



replaceEvens(given_arr); // Apply the function, logged an undefined when inside the console.log(...)
console.log(given_arr); // print the function
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


// CODEWARS

/* Kata 1
After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

Write a code that gives out the total amount for different days(d).


SOLUTION: This was a simple one of just converting python to JavaScript, almost forgot that elif in JS is else if.

function rentalCarCost(d) {
  let cost = 40
  let total = d * cost
  
  if (d >= 7){
    return total -= 50
  } else if (d >= 3) {
    return total -= 20
  } else {
    return total
  }
}



KATA 2:

You are the greatest chef on earth. No one boils eggs like you! Your restaurant is always full of guests, who love your boiled eggs. But when there is a greater order of boiled eggs, you need some time, because you have only one pot for your job. How much time do you need?

Your Task
Implement a function, which takes a non-negative integer, representing the number of eggs to boil. It must return the time in minutes (integer), which it takes to have all the eggs boiled.

Rules
you can put at most 8 eggs into the pot at once
it takes 5 minutes to boil an egg
we assume, that the water is boiling all the time (no time to heat up)
for simplicity we also don't consider the time it takes to put eggs into the pot or get them out of it
Example (Input --> Output)
0 --> 0
5 --> 5
10 --> 10


SOLUTION: This one was trickier to convert. in python const batches = ... was eggs // 8. I tried a few different ways and rounding up with Math.ceil() is what gave the expected outcome.

function cookingTime(eggs) {
 
  const batches = Math.ceil(eggs/8);
  
  const totalTime = batches*5;
  
  return totalTime
  
}
*/