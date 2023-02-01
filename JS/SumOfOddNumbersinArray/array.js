function getOdd(num) {
    let oddNum = [];
    for(var i =0; i< num.length; i++)
    {
        var value = num[i];

        if(value % 2 !== 0) {
            console.log(i, value);
            oddNum.push(value);
        }
    }
    return oddNum;
}


function sumOfOdd(oddSum) {
    let sum = 0;

    for(var i = 0; i<oddSum.length; i++) {
        var oddValue = oddSum[i];
        sum = sum + oddValue;
    }

    return sum;
}

var arr = [10, 21, 24, 23, 25, 64, 47, 48, 78];
var setOdd = getOdd(arr);
console.log(setOdd);

var getSum = sumOfOdd(setOdd);
console.log(getSum);