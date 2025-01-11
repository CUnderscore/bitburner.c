/** @param { NS } ns */

export function scana(ns, server, prev) {
	const next = ns.scan(server).filter((s) => s !== prev);
	if (!next.length) {
		return server;
	}
	return [server].concat(next.map((s) => scana(ns, s, server)));
}

export function getServers(ns, file) {
	const pattern = new RegExp(/[\w+.-]+/g);
	return ns.read(file).match(pattern);
}

export function main(ns) {
	const allservs = scana(ns, ns.getHostname());
	ns.write("serverlist.txt", allservs.toString(), "w");
	for (const server of getServers(ns, "serverlist.txt")) {
		ns.tprint(server);
	}
}
