/** @param {NS} ns */

export async function main(ns) {
    const serverList = scan(ns, ns.getHostname());
    const tree = recursive([0]);
    for (const node of [0].concat(tree)) {
        display(serverList[node]);
    }

    function display(server) {
        const depthPad = "";
        ns.tprintf(
            `${depthPad.padStart(server.depth * 2, " ")}` + `└┄ ${server.name}\n`,
        );
    }
    function recursive(index) {
        const children = [];
        if (index >= serverList.length) {
            return index;
        }
        for (let i = index; i < serverList.length; i++) {
            if (serverList[i].parent === serverList[index].name) {
                children.push(i);
                children.push(recursive(i));
            }
        }
        return children.flat();
    }
}

export function scan(ns, host) {
    const serverList = [serverObject(host)];
    for (const server of serverList) {
        for (const child of ns.scan(server.name)) {
            if (child === server.parent) {
                continue;
            }
            serverList.push(serverObject(child, server.depth + 1, server.name));
        }
    }
    return serverList;

    function serverObject(nodeName, nodeDepth, nodeParent) {
        const nodeObject = {
            name: nodeName,
            depth: nodeDepth ?? null,
            parent: nodeParent ?? null,
        };
        return nodeObject;
    }
}
