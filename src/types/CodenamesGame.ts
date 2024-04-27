import type { CodenamesPlayer } from "./CodenamesPlayer";

export interface CodenamesGame {
    uuid: string;
    id: string;
    name: string;
    players: CodenamesPlayer[];
    teams: CodenamesPlayer[][];
    firstTeam: number;
}

export class Codenames implements CodenamesGame {
    uuid: string;
    id: string;
    name: string;
    players: CodenamesPlayer[];
    teams: CodenamesPlayer[][];
    firstTeam: number;

    constructor() {
        this.uuid = "";
        this.id = "";
        this.name = "";
        this.players = [];
        this.teams = [];
        this.firstTeam = 0;
    }
}
