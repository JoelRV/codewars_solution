/* We need to sum big numbers and we require your help.

Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.
Example

add("123", "321"); -> "444"
add("11", "99");   -> "110"

Notes

The input numbers are big.
The input is a string of only digits
The numbers are positives
*/

function add(a, b) {
    // credit https://davidllinder.medium.com/adding-big-numbers-in-javascript-2e463f227e23
    // Basically we add each individual decimal place and carry when >9
    // like we learned in school 
    let firstBigNumArray = a.split('');
    let secondBigNumArray = b.split('');
    
    let result = ''
    let decimalCarry = 0
    while (firstBigNumArray.length || secondBigNumArray.length || decimalCarry){
        decimalCarry += ~~firstBigNumArray.pop() + ~~secondBigNumArray.pop()
        result = decimalCarry % 10 + result
        decimalCarry = decimalCarry > 9
    }
    return result
}   