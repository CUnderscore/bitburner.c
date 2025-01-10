/** @param { NS } ns */

export async function main(ns) {
    const victim = ns.args[0]
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
        return ns.getServer(server).numPortsOpen;
    }
    function nuke(server) {
        const _server = ns.getServer(server);
        if (_server.numPortsOpen >= _server.numPortsRequired) {
            ns.nuke(_server.name);
            return true;
        } return false;
    }
}
