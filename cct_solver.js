("use strict");

/* DATABASE:
 * solver names input manually
 */
export function database() {
	return ["Encryption I: Caesar Cipher"];
}

// "Find Largest Prime Factor"
export function primeFactor(data) {
	let a = data;
	let i = 2;
	const solution = [];
	while (i <= data) {
		if (a % i === 0) {
			solution.push(i);
			a = a / i;
		} else {
			i++;
		}
	}
	return solution[solution.length - 1];
}

// "Subarray with Maximum Sum"
export function maxSum(data) {
	const solution = [];
	let i = 0;
	for (const num of data) {
		if (i + num < i) {
			solution.push(i);
		}
		if (i + num > 0) {
			i += num;
		} else {
			solution.push(i);
			i = 0;
		}
	}
	solution.push(i);
	return Math.max(...solution);
}

// Total Ways to Sum
export function totalWaysToSum(data) {
	const prtn = [data];
	prtn.length = data;
	prtn.fill(0, 1);
}
// Total Ways to Sum II
export function totalWaysToSumII(data) {
	return data;
}

// Spiralize Matrix
export function spiralizeMatrix(data) {
	const solution = [];
	let bound = 1;
	let v = 0;
	let h = 0;
	while (solution.length < data.flat().length) {
		for (; h < data[v].length - bound; h++) {
			solution.push(data[v][h]);
		}
		for (; v < data.length - bound; v++) {
			solution.push(data[v][h]);
		}
		for (; h >= bound; h--) {
			solution.push(data[v][h]);
		}
		for (; v >= bound; v--) {
			solution.push(data[v][h]);
		}
		h++;
		v++;
		bound++;
	}
	return solution;
}

// Array Jumping Game
export function arrayJumpingGame(data) {
	let jump = 0;
	for (let i = 0; i < data.length; i++) {
		jump--;
		if (jump < data[i]) {
			jump = data[i];
		}
	}
	if (jump >= 0) return 1;
	return 0;
}

// 3,1,2,4,1,1,1,2,2,3,2,3,3,6,2,6,3,2,4
// ans = 6
export function arrayJumpingGameII(data) {
	let solution = 0;
	let jump = 0;
	let best = 0;
	for (let i = 0; i < data.length; i++) {
		jump--;
		best--;
		if (best < data[i]) {
			best = data[i];
		}
		if (jump < 1) {
			jump = best;
			solution++;
		}
	}
	if (jump < 0) return 0;
	return solution;
}

// Encryption I: Caesar Cipher
export function caesarCipher(data) {
	const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	let solution = "";
	for (const ch of data[0]) {
		if (isWhitespace(ch)) {
			solution += " ";
		} else {
			solution += shiftLetter(ch, data[1]);
		}
	}
	return solution;

	function isWhitespace(letter) {
		return /\s/.test(letter);
	}

	function shiftLetter(letter, shift) {
		const newPos = alphabet.indexOf(letter) - shift;
		if (newPos < 0) {
			return alphabet.charAt(alphabet.length + newPos);
		}
		return alphabet.charAt(newPos);
	}
}
