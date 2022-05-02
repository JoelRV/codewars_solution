/* 
2 kyu
The position of a digital string in a infinite digital string
4718994% of 190250 of 737myjinxin2015

    JavaScript
    Node v10.x

        VIM
        EMACS

Instructions
Output

    When no more interesting kata can be resolved, I just choose to create the new kata, to solve their own, to enjoy the process --myjinxin2015 said

Description:

There is a infinite string. You can imagine it's a combination of numbers from 1 to n, like this:

"123456789101112131415....n-2n-1n"

Please note: the length of the string is infinite. It depends on how long you need it(I can't offer it as a argument, it only exists in your imagination) ;-)

Your task is complete function findPosition that accept a digital string num. Returns the position(index) of the digital string(the first appearance).

For example:

findPosition("456") == 3
because "123456789101112131415".indexOf("456") = 3
            ^^^

Is it simple? No, It is more difficult than you think ;-)

findPosition("454") = ?
Oh, no! There is no "454" in "123456789101112131415",
so we should return -1?
No, I said, this is a string of infinite length.
We need to increase the length of the string to find "454"

findPosition("454") == 79
because "123456789101112131415...44454647".indexOf("454")=79
                                   ^^^

The length of argument num is 2 to 15. So now there are two ways: one is to create a huge own string to find the index position; Or thinking about an algorithm to calculate the index position.

Which way would you choose? ;-)
Some examples:

 findPosition("456") == 3
 ("...3456...")
       ^^^
 findPosition("454") == 79
 ("...444546...")
        ^^^
 findPosition("455") == 98
 ("...545556...")
       ^^^
 findPosition("910") == 8
 ("...7891011...")
        ^^^
 findPosition("9100") == 188
 ("...9899100101...")
         ^^^^
 findPosition("99100") == 187
 ("...9899100101...")
        ^^^^^
 findPosition("00101") == 190
 ("...99100101...")
         ^^^^^
 findPosition("001") == 190
 ("...9899100101...")
           ^^^
 findPosition("123456789") == 0
 findPosition("1234567891") == 0
 findPosition("123456798") == 1000000071 */


function parseTry(num, start, step){
    console.log(num, "step=",step, "start=", start)
    if (start + step <= num.length){
        n = parseInt(num.slice(start, (start+step)))
    }else{
        //|----num----|
        //|-p2-|--p1--|
        let p1 = num.slice(start);
        let p2 = num.slice(0,start);
        let common = p1.length + p2.length - step;

        //|---step----|
        // |-xx-|--p2--|, n - 1
        // |--p1--|-xx-|, n
        let chs = p2.slice(common)
        if (chs === '9' * chs.length){
            p1 += '0' * chs.length;
            n = parseInt(p1)
        }else{
            p1 += p2.slice(common);
            n = parseInt(p1) + 1;
        }

        if((n-1).toString().slice(step - p2.length) !== p2){
            return -1;
        }

    }

    let tokens = [];
    let lena = 0;

    if (start){
        let prev = (n-1).toString()
        tokens.push(prev.slice(prev.length - start))
        lena += start
    }

    x = n
    while (lena < num.length){
        stra = x.toString()
        if (stra.length + lena > num.length){
            tokens.push(stra.slice(0,(num.length - lena)))
            lena += num.length - lena
        }else{
            tokens.push(stra)
            lena += stra.length
        }
        x += 1
    }

    if( tokens.join('') == num){
        total = getTotalLength(n)
        return total - start
    }else{
        return -1
    }
}

function getTotalLength(n){
    let total = 0
    let lena = 1
    let x = 10

    while (n > x){
        total += lena *(x - x/10)
        x *= 10
        lena += 1
    }

    total += lena * (n - x / 10)
    return total
}

function findPosition(num){
    num = num.toString()
    let indexes = []

    for (let step = 0; step < num.length + 1; step++) {
        for (let start = 0; start < step; start++) {
            const index = parseTry(num, start, step);
            console.log(index)
            if( index >= 0){
                indexes.push(index)
            }
        }
    }
    console.log(indexes)
    if(indexes.length === 0){
            return parseInt(getTotalLength(parseInt('1' + num)) + 1)
    }
    return parseInt(Math.min(...indexes))

    
}
console.log(findPosition("910"))
console.log(findPosition("001"))