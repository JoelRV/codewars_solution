/* A format for expressing an ordered list of integers is to use a comma separated list of either

    individual integers
    or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"

Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

Example:

solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"

Courtesy of rosettacode.org
 */

function solution(list){

    let result = [];
    let span = 1;
    let currentLeft = null;
    let currentRight = null;
    let delta = 1;
     
    for(var i=0; i<list.length;i++){
    
     if((list[i] > 0 && list[i+1] > 0) || (list[i] < 0 && list[i+1] < 0)){
       delta = Math.abs(Math.abs(list[i]) - Math.abs(list[i+1]));
     }else{
       delta = Math.abs(list[i+1] - list[i]);
     }
     
     if(currentLeft === null){
         currentLeft = list[i];
       }
      
      
     if(delta === 1){
   
       currentRight = list[i+1];
   
       span += 1;
     }else if((delta > 1 || i+1 === list.length )  && span >= 3){
       result.push(`${currentLeft}-${currentRight}`);
       currentLeft = null;
       currentRight = null;
       span = 1;
     }else{
       result.push(`${currentLeft}`)
       if(currentRight!== null){
         result.push(`${currentRight}`);
       }
       currentLeft = null;
       currentRight = null;
       span = 1;
     }
    }
    return result.join(',')
   }

   