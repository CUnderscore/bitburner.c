import scan from "./search.js";
/** @param {NS} ns */

export async function main(ns) {
	const servers = scan(ns, ns.getHostname());
}
