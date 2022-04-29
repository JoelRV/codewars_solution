/* Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

Three 1's => 1000 points
Three 6's =>  600 points
Three 5's =>  500 points
Three 4's =>  400 points
Three 3's =>  300 points
Three 2's =>  200 points
One   1   =>  100 points
One   5   =>   50 point

A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

Example scoring

Throw       Score
---------   ------------------
5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)

In some languages, it is possible to mutate the input to the function. This is something that you should never do. If you mutate the input, you will not be able to pass all the tests.
*/

function score( dice ) {
    console.log(dice)
    // inital variables
    let copyDice = [...dice].sort();
    let tripletArray = [];
    let totalScore = 0
    
    // check for triplet and remove them from original array
    for (var i = 0; i<copyDice.length; i++){
        if(copyDice[i] === copyDice[i+1]){
            if(copyDice[i] === copyDice[i+2]){
                tripletArray = tripletArray.concat(copyDice.slice(i,i+3));
                copyDice.splice(i,3);       
            }
        }
    }
    
    // create sum of triplet values, otherwise output 0
    let sumArray = tripletArray.length > 0 ? tripletArray.reduce((current,next) => current + next) : 0
    
    // scoring conditions for triplets
    if(sumArray == 3){
        totalScore += 1000
    }else if(sumArray == 18){
        totalScore += 600
    }else if(sumArray == 15){
        totalScore += 500
    }else if(sumArray == 12){
        totalScore += 400
    }else if(sumArray == 9){
        totalScore += 300
    }else if(sumArray == 6){
        totalScore += 200
    }
    
    // scoring conditions for 1s and 5s
    totalScore += copyDice.filter(c => c === 1).length * 100;
    totalScore += copyDice.filter(c => c === 5).length * 50;
    
    return totalScore;
}