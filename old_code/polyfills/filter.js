Array.prototype.myFilter = function (callback) {
	let result = [];
	for (let i = 0; i < this.length; i++) {
		// Check if the element passes the test (callback returns true)
		if (callback(this[i], i, this)) {
			result.push(this[i]); // Push the element to the result if the callback returns true
		}
	}
	return result;
};

const array = [1, 2, 3, 4];
const ans = array.filter((item, index) => item % 2 === 0);
console.log("ans :", ans);
