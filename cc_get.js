import { getServers } from "./scan";
/** @param {NS} ns */

export async function main(ns) {
	const servers = getServers(ns, "serverlist.txt");
}
