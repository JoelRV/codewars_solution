/* Alright, detective, one of our colleagues successfully observed our target person, Robby the robber. We followed him to a secret warehouse, where we assume to find all the stolen stuff. The door to this warehouse is secured by an electronic combination lock. Unfortunately our spy isn't sure about the PIN he saw, when Robby entered it.

The keypad has the following layout:

┌───┬───┬───┐
│ 1 │ 2 │ 3 │
├───┼───┼───┤
│ 4 │ 5 │ 6 │
├───┼───┼───┤
│ 7 │ 8 │ 9 │
└───┼───┼───┘
    │ 0 │
    └───┘

He noted the PIN 1357, but he also said, it is possible that each of the digits he saw could actually be another adjacent digit (horizontally or vertically, but not diagonally). E.g. instead of the 1 it could also be the 2 or 4. And instead of the 5 it could also be the 2, 4, 6 or 8.

He also mentioned, he knows this kind of locks. You can enter an unlimited amount of wrong PINs, they never finally lock the system or sound the alarm. That's why we can try out all possible (*) variations.

* possible in sense of: the observed PIN itself and all variations considering the adjacent digits

Can you help us to find all those variations? It would be nice to have a function, that returns an array (or a list in Java/Kotlin and C#) of all variations for an observed PIN with a length of 1 to 8 digits. We could name the function getPINs (get_pins in python, GetPINs in C#). But please note that all PINs, the observed one and also the results, must be strings, because of potentially leading '0's. We already prepared some test cases for you.

Detective, we are counting on you!
 */

function getPINsAll(observed) {
    // TODO: This is your job, detective!
    // lets create an array where index = possible key strokes for
    // key === index
    let possibleCombinations = [["08"],["142"],["2153"],["326"],
                               ["4157"],["58624"],["6953"],["748"],
                               ["80759"],["986"]]
    let observedSplitArray = observed.split('')
    let result = []
    
    // case for string length = 1
    if (observedSplitArray.length === 1){
      for (var i = 0; i < observedSplitArray.length; i++){
        var index = parseInt(observedSplitArray[i])
        var combiForThisDigit = possibleCombinations[index][0].split('')
        for(var j = 0; j < combiForThisDigit.length; j++){
          result.push(combiForThisDigit[j])
        }
      }
      return result
    } 
  
    // recursive approach calling the function on substrings
    for (var i = 0; i < observedSplitArray.length; i++){
      var index = parseInt(observedSplitArray[i])
      
      var combiForThisDigit = possibleCombinations[index][0].split('')
      var restDigits =  observed.slice(i+1);
  
      for(var j = 0; j < combiForThisDigit.length; j++){
        for (var subP of getPINsAll(restDigits)){
        result.push(combiForThisDigit[j] + subP)
        }
      }
    
    }
    return result
  }
  function getPINs(string) {
    // Basically a helper function. Takes the output of getPINsAll()
    // we filter for entries thqt have a length smaller than input string
    // run through new Set() , which removes dupicates, then output as Array for tests
    // works base on ES6
    return Array.from(new Set(getPINsAll(string).filter(ele => ele.length === string.length)))
    
  }