/* Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

function moveZeros(arr) {
    
    const originalLength = arr.length //for later index correction
    // find indices with 0 values in original array
    const zeroIndices = arr.flatMap((current, index)=> current === 0 ? index : []);
    
    for (var index of zeroIndices){
        // keep remove on zero at a time. Correct indices qs ze go
        // since splice modifies original array length
        arr.splice(index - (originalLength-arr.length),1)
    }
    // append zero array of same length as indices array
    var zeroFill =  new Array(zeroIndices.length).fill(0)
    return arr.concat(zeroFill)
}