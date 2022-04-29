/* The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.

Examples

" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false

*/

function generateHashtag (str) {
    // check if after removing sapces string is longer than 0
    if(str.replace(/\s+/g, '').length < 1){
        return false;
    }
    
    // filter for trailing spaces
    let strArray = str.split(" ").filter(x => x !== "");
    // return fqlse if string is gonna be 140 chars accounting for hashtag
    if(strArray.join("").length>139){
        return false;
    }
    let strArrayUpperCase = strArray.map(x => x[0].toUpperCase() + x.substr(1));
    //console.log(strArray.join("").length)
    return `#${strArrayUpperCase.join("")}`;
}