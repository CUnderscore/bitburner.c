/** @param { NS } ns */

export async function main(ns) {
	function openPorts(server) {
		const ports = new Map([
			["BruteSSH", ns.brutessh],
			["FTPCrack", ns.ftpcrack],
			["relaySMTP", ns.relaysmtp],
			["HTTPWorm", ns.httpworm],
			["SQLInject", ns.sqlinject],
		]);
		for (const [file, cmd] of ports) {
			if (ns.fileExists(`${file}.exe`)) {
				cmd(server);
			}
		}
		return ns.getServer(server).numPortsOpen;
	}
}
