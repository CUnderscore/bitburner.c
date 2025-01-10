/** @param { NS } ns */

export async function main(ns) {
	await ns.wget(
		"https://api.github.com/repos/CUnderscore/bitburner.c/git/trees/main",
		"repo.txt",
		"home",
	);
	const filter = new RegExp(/\w+.js/g);
	const repo = ns.read("repo.txt").match(filter);
	const gitPath =
		"https://raw.githubusercontent.com/CUnderscore/bitburner.c/refs/heads/";
	for (const file of repo) {
		await ns.wget(`${gitPath}main/${file}`, file, "home");
	}
	ns.tprintf(`pulled ${repo.length} files`);
}
