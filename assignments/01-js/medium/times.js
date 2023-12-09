/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

// function calculateTime(n) {
//     let sum = 0;
//     let t1 = Date.now();  // Get the current time in milliseconds

//     for (let i = 1; i <= n; i++ ){
//         sum += i;
//     }

//     let t2 = Date.now();  // Get the current time in milliseconds after the loop

//     return t2 - t1;  // Return the difference in time
// }


// console.log(calculateTime(10000000000))

console.log("start")

function findSum(n){
    let ans = 0;
    for (let i = 0; i < n; i++){
        ans += i;
    }
    return ans;
}

function findSumTill100(){
    console.log(findSum(100))
}

function syncSleep(){
    let a = 1;
    for (let i = 0; i < 10000000000; i++){
        a++
    }
}

// findSumTill100();
setTimeout(findSumTill100, 1000);
syncSleep();

console.log("final log")