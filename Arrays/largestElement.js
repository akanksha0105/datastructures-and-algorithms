const largestElement = (array) => {
    if(array.length<=0)
        return -1;
    let maxNumber = array[0];
    for(let i =1; i<array.length; i++){
        maxNumber = Math.max(maxNumber, array[i])
    }
    return maxNumber;
}

console.log(largestElement([-2,3,4,2, 4]));