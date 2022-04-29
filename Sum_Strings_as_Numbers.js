/* Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'

A string representation of an integer will contain no characters besides the ten numerals "0" to "9". */
function sumStrings(a,b) {
    let firstBigNumArray = a.split('');
    let secondBigNumArray = b.split('');
    
    let result = ''
    let decimalCarry = 0
    while (firstBigNumArray.length || secondBigNumArray.length || decimalCarry){
      decimalCarry += ~~firstBigNumArray.pop() + ~~secondBigNumArray.pop()
      result = decimalCarry % 10 + result
      decimalCarry = decimalCarry > 9
    }
    // remove leading zeros with regex as encontered in test cases
    return result.replace(/^0+/, '')
  }