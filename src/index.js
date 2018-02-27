module.exports = function getZerosCount(number) {
    var k = 1,
    zeroCount = 0;
    while( Math.pow(5,k)<= number){
        zeroCount = zeroCount+parseInt(number/Math.pow(5,k));
        k++;
    }
    return zeroCount;
  // your implementation
}
