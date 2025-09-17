const secondLargest = (array) => {
    let largestElement = Number.MIN_SAFE_INTEGER;
    let secondLargestElement = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > largestElement) {
            secondLargestElement = largestElement;
            largestElement = array[i];
        } else if (array[i] > secondLargestElement && array[i] < largestElement) {
            secondLargestElement = array[i];
        }
    }

    return secondLargestElement === Number.MIN_SAFE_INTEGER ? null : secondLargestElement;
}
