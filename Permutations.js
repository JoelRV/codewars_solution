/* In this kata you have to create all permutations of a non empty input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

Examples:

* With input 'a'
* Your function should return: ['a']
* With input 'ab'
* Your function should return ['ab', 'ba']
* With input 'aabb'
* Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']

The order of the permutations doesn't matter.
*/

function permutationsAll(string) {
    // text two exeptions for input
    if (string.length === 0) return "";
    if (string.length === 1) return string;
    
    // run function recurseviley for each subPermutation until you hit one char
    // then concatenate up the chain up. Generates duplicates
    let resultArray = [];
    for (let index = 0; index < string.length; index++){
        const currentCharacter = string[index];
        const restCharacters = string.slice(0,index) + string.slice(index+1)
        
        for (subP of permutationsAll(restCharacters)){
            resultArray.push(currentCharacter + subP);
        }
    }
    return resultArray;
}
function permutations(string) {
    // Basically a helper function. Takes the output of perumtationsAll()
    // runs through new Set() , which removes dupicates, then output as Array for tests
    // works base on ES6
    return Array.from(new Set(permutationsAll(string)))
}  