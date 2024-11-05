// function curry(func) {
// 	return function curriedFunc(...args) {
// 		// console.log(args, args.length, func, func.length);
// 		if (args.length >= func.length) {
// 			return func(...args);
// 		} else {
// 			return function (...next) {
// 				console.log(...args, ...next);
// 				return curriedFunc(...args, ...next);
// 			};
// 		}
// 	};
// }

// const sum = (a, b, c, d) => a + b + c + d;
// const totalSum = curry(sum);
// console.log("total sum", totalSum(1));

function curry(fn) {
	const helper = function (...args) {
		if (args.length >= fn.length) {
			return fn.apply(this, args);
		} else {
			return (...args2) => helper.call(this, ...args, ...args2);
		}
	};
	return helper;
}

let join = (a, b, c) => {
	return `${a}_${b}_${c}`;
};

let curriedJoin = curry(join);

console.log(curriedJoin(13)(42)(3));
