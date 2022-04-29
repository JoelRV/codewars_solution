/* The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3

Algorithms */

function rgb(r, g, b){
    
    let rgbArray = [r,g,b];
    // round invalid numbers to closest accept range of 0-255
    rgbArray = rgbArray.map(x => x < 0 ? 0 : x);
    rgbArray = rgbArray.map(x => x > 255 ? 255 : x);
    
    // convert each array element into Hex
    let outputHex = "";
    for (var value of rgbArray){
        let firstValue = Math.floor(value/16);
        let firstHex = firstValue.toString(16).toUpperCase();
        let secondValue = value % 16;
        let secondHex = secondValue.toString(16).toUpperCase();
        
        outputHex = outputHex + firstHex + secondHex
    }
    return outputHex
}