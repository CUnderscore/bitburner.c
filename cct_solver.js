("use strict");

/* DATABASE:
 * solver names input manually
 */
export function database() {
    return ["Encryption I: Caesar Cipher"];
}

/* Encryption I: Caesar Cipher */
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
