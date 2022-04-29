/* Create a RomanNumerals class that can convert a roman numeral to and from an integer value. It should follow the API demonstrated in the examples below. Multiple roman numeral values will be tested for each helper method.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

Input range : 1 <= n < 4000

In this kata 4 should be represented as IV, NOT as IIII (the "watchmaker's four").
Examples

RomanNumerals.toRoman(1000); // should return 'M'
RomanNumerals.fromRoman('M'); // should return 1000

Help
Symbol 	Value
I 	1
IV 	4
V 	5
X 	10
L 	50
C 	100
D 	500
M 	1000 */

// TODO: create a RomanNumerals helper object
const RomanNumerals = {
    _mapTableRoman: {M: 1000, D: 500, C: 100, L:50, X: 10, V: 5, IV: 4, I: 1 },
    _mapTableArab: {1000: 'M', 500: 'D', 100: 'C', 50: 'L', 10: 'X', 5: 'V', 4: 'IV', 1: 'I' },
    
    toRoman: function(intInput) {
      if(intInput === 4){
        return 'IV';
      }
      let output = '';
      let intVar = intInput;
      let remainder = 0;
      let lastBase10 = null;
      let lastBase5 = null;
      for (var key in this._mapTableRoman){
        let intToString = intVar.toString().split('')
        if((this._mapTableRoman[key]/10).toString()[0] === '1'){
          lastBase10 = key
        }
        if(this._mapTableRoman[key].toString()[0] === '5'){
          lastBase5 = key
        }
        intToString = intVar.toString().split('')
        remainder = intVar % this._mapTableRoman[key];
        if (intToString[0] === '9' && intToString.length === 2){
          output += 'XC'
          intToString.shift()
          intVar = parseInt(intToString.join(''))
          continue
        }
        if (intToString[0] === '9' && intToString.length === 1){
          output += 'IX'
          intToString.shift()
          intVar = parseInt(intToString.join(''))
          continue
          }
        if (intToString[0] === '9'){
          output += this._mapTableArab[(this._mapTableRoman[lastBase10 ]/10)]
          output += lastBase10
          intToString.shift()
          intVar = parseInt(intToString.join(''))
          continue
        }
        if (intToString[0] === '4' && intToString.length === 1){
          output += 'IV'
          intToString.shift()
          intVar = parseInt(intToString.join(''))
          continue
        }
        if(intVar - remainder > 0){
          if (intToString[0] === '4'){
          output += key
          output += lastBase5
          intToString.shift()
          intVar = parseInt(intToString.join(''))
          continue
          }
          
          let factor = (intVar - remainder) / this._mapTableRoman[key];
          for (var x=0; x < factor; x++){
            output += key;
          }
        }
        intVar = remainder
        
      }
      return output;
    },
    
    fromRoman: function(romanInput) {
      let splitNumerals = romanInput.split('');
      let iterations = splitNumerals.length;
      let output = 0;
      for (var i=0; i < iterations; i++){
        if(splitNumerals[0] === undefined){
              break
            }
        let key = splitNumerals.shift()
        if(splitNumerals[0] !== undefined){
          if(this._mapTableRoman[key] < this._mapTableRoman[splitNumerals[0]]){
            output += (this._mapTableRoman[splitNumerals[0]] - this._mapTableRoman[key])
            splitNumerals.shift()
            continue
          }
        }
        output += this._mapTableRoman[key] 
      }
      return output
    }
  }