/** @param { NS } ns */

export async function main(ns) {
	const victim = ns.args[0];
	openPorts(victim);
	nuke(victim);

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
		return ns.getServer(server).openPortCount;
	}
	function nuke(server) {
		const _server = ns.getServer(server);
		if (!ns.fileExists("NUKE.exe")) {
			return false;
		}
		if (_server.openPortCount < _server.numOpenPortsRequired) {
			return false;
		}
		ns.nuke(_server.hostname);
		return true;
	}
}
