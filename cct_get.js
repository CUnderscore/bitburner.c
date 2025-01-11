("use strict");

import { getServers } from "./scan";
/** @param {NS} ns */

/* TODO:
 * write main to iterate over all servers and get the contracts
 * write func to check if a file is a contract
 * write func to check if the contract type has a solver
 * write func to attempt file with appropriate solver
 * print how many contracts have been solved
 * print types of contracts left unsolved
 */

export async function main(ns) {
    const servers = getServers(ns, "serverlist.txt");
    let track = 0;

    for (const server of servers) {
        const contracts = ns.ls(server).filter((file) => isContract(file));

        for (const cct of contracts) {
            if (hasSolver(cct, server)) {
                const data = ns.codingcontract.getData(cct, server);
                if (ns.codingcontract.attempt(data, cct, server)) {
                    track++;
                }
            }
        }
    }

    function hasSolver() {
        return;
    }
}

function isContract(file) {
    return /\.cct/.test(file);
}
