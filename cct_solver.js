("use strict");

/* DATABASE:
 * solver names input manually
 */
export function database() {
	return ["Encryption I: Caesar Cipher"];
}

// "Find Largest Prime Factor"
export function primeFactor(problem) {
	let a = problem;
	let i = 2;
	const solution = [];
	while (i <= problem) {
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
export function maxSum(problem) {
	const solution = [];
	let i = 0;
	for (const num of problem) {
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
export function totalWaysToSum(problem) {
	const prtn = [problem];
	prtn.length = problem;
	prtn.fill(0, 1);
}
// Total Ways to Sum II
export function totalWaysToSumII(problem) {
	return problem;
}

// Encryption I: Caesar Cipher
export function caesarCipher(problem) {
	const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	let solution = "";
	for (const ch of problem[0]) {
		if (isWhitespace(ch)) {
			solution += " ";
		} else {
			solution += shiftLetter(ch, problem[1]);
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
