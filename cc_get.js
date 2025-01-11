import { getServers } from "./scan";
/** @param {NS} ns */

export async function main(ns) {
    const servers = getServers(ns, "serverlist.txt");
}

function caesarCipher(problem) {
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
        const position = alphabet.indexOf(letter) - shift;
        if (position < 0) {
            return alphabet.charAt(alphabet.length + position);
        }
        return alphabet.charAt(position);
    }
}
