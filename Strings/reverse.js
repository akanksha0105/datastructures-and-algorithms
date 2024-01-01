const reverseString = (str) => {
    return str.trim().split("").reverse().join("")
}

console.log(reverseString("   hello    "))