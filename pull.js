/** @param { NS } ns */

export async function main(ns) {
	await ns.wget(
		"https://api.github.com/repos/CUnderscore/bitburner.c/git/trees/main",
		"repo",
		"home",
	);
	const filter = new RegExp(/\w+.js/g);
	const toPull = ns.read("gitMain.js").match(filter);
	for (const file of toPull) {
		await ns.wget(
			`https://raw.githubusercontent.com/CUnderscore/bitburner.c/refs/heads/main/${file}`,
			file,
			"home",
		);
	}
}
