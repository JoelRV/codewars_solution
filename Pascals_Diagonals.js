/* Create a function that returns an array containing the first l numbers from the nth diagonal of Pascal's triangle.

n = 0 should generate the first diagonal of the triangle (the ones).
The first number in each diagonal should be 1.
If l = 0, return an empty array.
Both n and l will be non-negative integers in all test cases.
*/

function generateDiagonal(n, l){
    // return an array containing the numbers in the nth diagonal of Pascal's triangle, to the specified length
    if (n === 0){
        var firstD = new Array(l).fill(1)
        return firstD
    }
    var resultD = []
    while (resultD.length < l){
        for(var i=0; i < l; i++){
            if(i===0){
                resultD.push(1)
            }else{
                // using wikipedia formula for calculating diagonals of pascal triangle
                var nextValue = resultD[i-1] * ((n+i)/i)
                // added round since random test fail to large digit errors
                resultD.push(Math.round(nextValue))
            }
            
        }
    }
    return resultD
}