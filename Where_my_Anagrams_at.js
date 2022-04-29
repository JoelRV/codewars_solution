/* What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false

'abba' & 'abca' == false

Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

Note for Go
For Go: Empty string slice is expected when there are no anagrams found.
*/

function anagrams(word, words) {
    var resultArray = [];
    // convert word into sum of UTF-16 ascii values
    var wordAsciiSum = 0
    for (var j = 0; j < word.length; j++){
        var asciiCode = word.charCodeAt(j)
        wordAsciiSum += asciiCode
    }
    //compare ascci sums with each word in array and .push() if sum equals wordAsciiSum
    for (var j = 0; j < words.length; j++){
        var sumAscii = 0
        for(var i = 0; i < words[j].length; i++){
            var asciiCode = words[j].charCodeAt(i)
            sumAscii += asciiCode
        }
        if (wordAsciiSum === sumAscii){
            resultArray.push(words[j])
        }
    }
    return resultArray
}